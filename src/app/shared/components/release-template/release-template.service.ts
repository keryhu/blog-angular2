import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";

import {lsat, RequestService} from "../../../core";

// 注意此服务，无法调用 requestService，所以，我单独再次实现了，，获取 token 的方法。

@Injectable()
export class ReleaseTemplateService {

  constructor(private http:Http) { }

  releaseTemplate(url:string,data:any,manageType:string){

    const headers = new Headers();
    const token = localStorage.getItem(lsat);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    if(manageType=='add'){
      return this.http.post(url,data,{headers:headers})
        .map(e=>e.json());
    }
    else if(manageType=='edit') {
      return this.http.put(url,data,{headers:headers})
        .map(e=>e.json());
    }

  }

}
