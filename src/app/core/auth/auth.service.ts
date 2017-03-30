import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Http, Response} from "@angular/http";
import {
  accessTokenValiditySeconds, authUrl, clientId, loginUrl, lsat, minLeftRefreshTokenSeconds,
  refreshToken_expired_in
} from "../index";
import {RequestService} from "./request.service";
import {AuthProfile} from "./auth-profile.model";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {RefreshToken} from "./refresh-token.model";
import {RefreshTokenRestService} from "./refresh-token-rest.service";

@Injectable()
export class AuthService {
  private loginSub: Subscription;
  private saveTokenSub: Subscription;
  private refreshSubscription: Subscription;
  private getNewTokenSub: Subscription;
  private _loginedIn = new BehaviorSubject(false);
  private userData: any = null;
  private accessTokenRefreshInterval: number = accessTokenValiditySeconds -
    minLeftRefreshTokenSeconds;

  //存在 登录后的 redirect url,如果之前用户是因为访问某个url没有权限,那么就会暂时存储这个进 redirectUrl
  // 等到登录成功后,就会进去。
  public redirectUrl: string;

  constructor(private http: Http, private router: Router, private requestService: RequestService,
              private refreshTokenRest: RefreshTokenRestService) {
    //如果token未过期,那么就执行刷新refreshtoken

    const accessToken: string = localStorage.getItem(lsat);
    if (accessToken) {
      this.userData = this.decodeAccessToken(accessToken);
      const ex = this.userData.exp * 1000;
      //过期

      if (ex <= Date.now()) {
        this.logout()
      }
      //未过期
      else {

        this._loginedIn.next(true);
        //如果refreshtoken 还未过期,那么就执行制动刷新
        const authProfile: AuthProfile = JSON.parse(localStorage.getItem('authProfile'));
        if (authProfile.refreshToken_expires_in > Date.now()) {
          //每次浏览器刷新,都将保存在本地的  access token,更新到 BehaviorSubject里
          // this._access_token.next(accessToken);

          //当刷新页面的时候,如果发现过期时间小于  正常过期时间一般的时候,自动刷新 access-token--这个就是提前刷新

          const tokenRefreshInterval: number = ex - Date.now() - 1000 * minLeftRefreshTokenSeconds;

          const loginName = authProfile.loginName;
          //因为页面刷新了,所以设置下一次刷新的时间为动态时间。 而周期性的间隔时间不会变
          this.scheduleRefresh(tokenRefreshInterval, loginName);
        }
      }
    }
  }

  login(username: string, password: string) {
    const loginBody = "username=" + encodeURI(username) + "&password=" + encodeURI(password) +
      "&grant_type=password&client_id=" + encodeURI(clientId);

    return this.http.post(authUrl, loginBody, {headers: this.requestService.getLoginHeaders()})
      .map(r => r.json())
      .do(r => {
        // lsat='access_token'
        if (r[lsat]) {
          localStorage.setItem(lsat, r[lsat]);
          //保存在loginStorage中的信息
          const authProfile: AuthProfile = {
            loginName: username,
            refreshToken_expires_in: Date.now() + refreshToken_expired_in * 1000
          };
          localStorage.setItem('authProfile', JSON.stringify(authProfile));
          this.requestService.getAsyAuthHeaders(r[lsat]);
          this._loginedIn.next(true);
        }
      })
      .map(r => {
        if (r[lsat]) {
          const refresh_token: RefreshToken = {
            loginName: username,
            refreshToken: r['refresh_token']
          };

          //因为存储 refreshtoken的时候,异步调用 locastorage里的access_token有可能是过时的,所以在这里  特别引入新的
          this.storeRefreshToken(refresh_token, r[lsat]);
          this.scheduleRefresh(this.accessTokenRefreshInterval * 1000, username);
        }
        return r;
      })
      .catch(this.handleError);

  }

  public isLoggedIn() {
    return this._loginedIn.getValue();
  }

  public getLoggedIn() {
    return this._loginedIn;
  }

  private storeRefreshToken(token: RefreshToken, accessToken: string) {

    this.saveTokenSub = this.refreshTokenRest.save(token, accessToken)
    //当用户第一次登录时候,保存access token 到后台,延后15s执行,先保证其他任务先执行。
      .delay(15000).subscribe(
        e => {
          console.log('store refreshToken success !');
        },
        err => {
          console.log('store refreshToken failer ')
          localStorage.clear();
        }
      );
  }

  //当页面刷新后,且用户处于登录状态,的 schedule
  scheduleRefresh(initDelay: number, loginName: string) {
    //Observable.timer, 间隔周期性时间为  accesstokenRefresh 刷新,且第一次刷新时间为  initDelay之后。
    //如果用户刚刚登录完,设置 initDelay=this.accessTokenRefreshInterval*1000。  如果用户刷新页面,initDelay就是动态的时间
    //值为 DynamicTokenRefreshInterval(),这个值在 ngInit里面设置
    const source = Observable.timer(initDelay, this.accessTokenRefreshInterval * 1000);

    console.log('距离下次刷新还有  : ' + initDelay / 1000 + ' 秒');

    this.refreshSubscription = source.subscribe(() => {
      console.log('接下来执行-- 通过 refreshToken 获取新的access-token !!!');
      this.getNewAccessToken(loginName);
    })

  }

  /**
   * 利用refreshtoken 获取新的access——token
   * @param refresh_token
   */
  public getNewAccessToken(loginName: string) {

    const access_token: string = localStorage.getItem(lsat);

    this.getNewTokenSub = this.refreshTokenRest.get(loginName, access_token)
      .switchMap(e => {
        const body = "refresh_token=" + e + "&grant_type=refresh_token&client_id=" + clientId;
        return this.http.post(authUrl, body, {headers: this.requestService.getLoginHeaders()})
      })
      .map(e => e.json())
      .subscribe(
        e => {
          if (e[lsat]) {
            //this._access_token.next(e.access_token);
            localStorage.setItem(lsat, e[lsat]);
            console.log('stroe new access_token success ! ');
          }

          if (typeof this.saveTokenSub !== 'undefined') {
            this.saveTokenSub.unsubscribe();
          }
        },
        err => {
          //当更新失败后,自动切换到登录页面
          console.log('更新refreshToken 失败!');
          this.router.navigate(['/login']);
          this.refreshSubscription.unsubscribe();
          localStorage.clear();

          if (typeof this.saveTokenSub !== 'undefined') {
            this.saveTokenSub.unsubscribe();
          }

          this._loginedIn.next(false);
        }
      )

  }

//解析jwt

  private decodeAccessToken(access_token: string) {
    return JSON.parse(window.atob(access_token.split('.')[1]));
  }


  public  logout() {
    this._loginedIn.next(false);
    localStorage.removeItem(lsat);
    localStorage.removeItem('token');
    this.router.navigate(['']);

    if (typeof this.refreshSubscription !== 'undefined') {
      this.refreshSubscription.unsubscribe();
    }
    if (typeof this.saveTokenSub !== 'undefined') {
      this.saveTokenSub.unsubscribe();
    }
  }

  // 将出错信息，报告给 login component
  private handleError(error: Response) {
    const m = error.json();
    const j = m.error;
    return Observable.throw(j || 'Server error');
  }

}
