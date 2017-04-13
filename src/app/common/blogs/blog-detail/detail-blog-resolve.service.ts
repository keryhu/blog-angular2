import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

import {detailBlogUrl, invalidBlogId, RequestService} from "../../../core/";



// 加载详细的boke，先获取server data
@Injectable()
export class DetailBlogResolveService implements Resolve<Observable<any>> {

  constructor(private router: Router, private http: Http,
              private request: RequestService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<any>>
    | Promise<Observable<any>>
    | Observable<any> {
    const id = route.params['id'];
    const url=`${detailBlogUrl}/${id}`;

    return this.http.get(url, this.request.getJsonOptions())
      .map(e=>{
        if(e['_body']==invalidBlogId){
          this.router.navigate(['/404']);
          return false;
        }
        else {
          return e.json();
        }
      })
     // .catch(this.request.defaultHandlerError);

  }


}
