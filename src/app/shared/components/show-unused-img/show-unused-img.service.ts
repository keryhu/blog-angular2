import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

import {getBlogUnusedImgUrl, lsat, rmUnusedImgUrl} from "../../../core";


@Injectable()
export class ShowUnusedImgService {

  constructor(private http:Http) { }

  // 注意此服务，无法调用 requestService，所以，我单独再次实现了，，获取 token 的方法。

  showUnusedImgUrl(){
    const headers = new Headers();
    const token = localStorage.getItem(lsat);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    const unusedImgUrl=getBlogUnusedImgUrl;

    return this.http.get(unusedImgUrl,{headers:headers})
      .map(e=>e.json());
  }

  rmImg(url:string){
    const headers = new Headers();
    const token = localStorage.getItem(lsat);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    const postUrl=rmUnusedImgUrl;
    const m={url:url};
    return this.http.post(postUrl,m,{ headers: headers})
      .map(e=>e.json());

  }

}
