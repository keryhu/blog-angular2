import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Http,Response} from "@angular/http";
import {authUrl, clientId, loginUrl, lsat, refreshToken_expired_in} from "../index";
import {RequestService} from "./request.service";
import {AuthProfile} from "./auth-profile.model";
import {Observable, Subscription} from "rxjs";
import {RefreshToken} from "./refresh-token.model";
import {RefreshTokenRestService} from "./refresh-token-rest.service";

@Injectable()
export class AuthService {
  private loginSub: Subscription;
  private saveTokenSub: Subscription;

  constructor(private http:Http,private router:Router,private requestService:RequestService,
  private refreshTokenRest:RefreshTokenRestService) { }

  login(username: string, password: string){
    const loginBody = "username=" + encodeURI(username) + "&password=" + encodeURI(password) +
      "&grant_type=password&client_id=" + encodeURI(clientId);

    console.log(`username is : ${username} , password is : ${password}`);
    return this.http.post(authUrl,loginBody,{headers: this.requestService.getLoginHeaders()})
      .map(r=>r.json())
      .do(r=> {
        // lsat='access_token'
        if (r[lsat]) {
          localStorage.setItem(lsat, r[lsat]);
          //保存在loginStorage中的信息
          const authProfile: AuthProfile = {
            loginName: username,
            userId: r['userId'],
            refreshToken_expires_in: Date.now() + refreshToken_expired_in * 1000
          };
          localStorage.setItem('authProfile', JSON.stringify(authProfile));
          this.requestService.getAsyAuthHeaders(r[lsat]);
        }
      })
      .map(r=> {
        if (r[lsat]) {
          const refresh_token: RefreshToken = {
            userId: r['userId'],
            refreshToken: r['refresh_token']
          };

          //因为存储 refreshtoken的时候,异步调用 locastorage里的access_token有可能是过时的,所以在这里  特别引入新的
          this.storeRefreshToken(refresh_token, r[lsat]);
        }
        return r;
      })
      .catch(this.handleError);

  }

  private storeRefreshToken(token: RefreshToken, accessToken: string) {

    this.saveTokenSub =this.refreshTokenRest.save(token, accessToken)
    //当用户第一次登录时候,保存access token 到后台,延后15s执行,先保证其他任务先执行。
      .delay(15000).subscribe(
        e=> {
          console.log('store refreshToken success !');
        },
        err=> {
          console.log('store refreshToken failer ')
          localStorage.clear();
        }
      );
  }


  // 将出错信息，报告给 login component
  private handleError(error: Response) {
    const m = error.json();
    const j = m.error;
    return Observable.throw(j || 'Server error');
  }

}
