import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Http,URLSearchParams} from "@angular/http";

import {invalidBlogId, RequestService, serverUpdateBlogUrl} from "../../../core";



// 管理员，编辑某个博客的时候，根据url里面的查询参数blogId，来提前下载blog需要编辑的主要内容
@Injectable()
export class EditBlogResolveService implements Resolve<Observable<any>>{


  constructor(private router: Router, private http: Http,
              private request: RequestService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Observable<any>>
    | Promise<Observable<any>>
    | Observable<any> {

    const id = route.queryParams['id'];
    if(!id){
      this.router.navigate(['/404']);
      return Observable.of(false);
    }
    const url=serverUpdateBlogUrl;
    const params = new URLSearchParams();
    params.set('blogId', id);

    return this.http.get(url, this.request.getAuthOptions(params))
      .map(res=>{
        if(res['_body']==invalidBlogId){
          this.router.navigate(['/404']);
          return false;
        }
        else {
          return res.json();
        }
      });
  }



}
