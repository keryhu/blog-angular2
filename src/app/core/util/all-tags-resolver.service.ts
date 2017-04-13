import { Injectable } from '@angular/core';
import {RequestService} from "../auth/request.service";
import {Http} from "@angular/http";
import {findAllTagsUrl} from "../index";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";


// 因为 i此服务出了用在  tag 配置页面，还用在发布新博客的时候,/blog、／source-code
// 等需要显示所有的tag标签，支持排序，，所以全局只需要一个 对象就可以了。,
// 谁需要他，将他加载在 路由 resolve里面，因为是全局只需要一个，
// 所以放在core里面也是对的

@Injectable()
export class AllTagsResolver implements Resolve<Observable<any>> {

  private url=findAllTagsUrl;

  constructor(private http:Http,private requestService:RequestService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Observable<any>>
    | Promise<Observable<any>>
    | Observable<any> {

    return this.http.get(this.url,this.requestService.getJsonOptions())
      .map(e=>e.json());
  }


}
