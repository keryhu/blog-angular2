import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

import {SimpleBlogService} from "./simple-blog.service";
import {PaginationParam} from "../../../shared/models/pagination-param.model";

// 此resolve 无法获取到 url路由里面的查询参数
@Injectable()
export class SimpleBlogResolveService implements Resolve<Observable<any>> {

  constructor(private simpleBlogService: SimpleBlogService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<any>>
    | Promise<Observable<any>>
    | Observable<any> {

    const  urlQueryParam: PaginationParam =JSON.parse(JSON.stringify(route.queryParams));
    //设置 URLSearchParams 参数
    const p = new URLSearchParams();
    if (urlQueryParam){
      if (urlQueryParam.key) {
        p.set('key', urlQueryParam.key);
      }
      if (urlQueryParam.tag) {
        p.set('tag', urlQueryParam.tag)
      }
      if (urlQueryParam.page) {
        p.set('page', urlQueryParam.page.toString());
      }
      if (urlQueryParam.sort) {
        p.set('sort', urlQueryParam.sort.toString());
      }
    }
    return this.simpleBlogService.getSimpleBlog(p);
  }


}




