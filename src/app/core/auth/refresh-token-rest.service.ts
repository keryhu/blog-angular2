import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers,URLSearchParams} from "@angular/http";

import {RefreshToken} from "./refresh-token.model";
import {refreshTokenGetUrl, refreshTokenSaveUrl} from "../index";
import {RequestService} from "./request.service";


// 当用户登录成功后，保存refreshToken到后台服务器，和refreshToken即将到期的时候，
// 用来从后台获取之前保存的 refreshToken
@Injectable()
export class RefreshTokenRestService {

  constructor(private http:Http,private request:RequestService) {

  }

  //因为这个方法是在 用户登录时,access-token 还没有保存到本地,所以需要参数的形式传递,异步同时进行的,所以,需要单独引用最新的 access——token
  save(token:RefreshToken,accessToken:string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${accessToken}`);
    return this.http.post(refreshTokenSaveUrl, JSON.stringify(token),
      {headers: headers});
  }

  get(userId:string,accessToken:string) {
    let params:URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${accessToken}`);
    params.set('userId', userId);
    let options = new RequestOptions({ headers: headers,search:params ,body:''});

    return this.http.get(refreshTokenGetUrl, this.request.getAuthOptions(params))
      .map(e=>e.json())
      .map(e=>e.refreshToken);
  }




}
