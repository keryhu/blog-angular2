import { Injectable } from '@angular/core';
import { Headers, RequestOptions,URLSearchParams,Response } from '@angular/http';
import {clientId, clientSecret, lsat} from "../index";
import {Observable, Subject} from "rxjs";

@Injectable()
export class RequestService {

  private clientId=clientId;
  private clientSecret=clientSecret;
  private basicSecret=btoa(`${this.clientId}:${this.clientSecret}`);
  private asyAuthHeaderSource=new Subject<Headers>();

  asyAuthHeader$=this.asyAuthHeaderSource.asObservable();


  constructor(){}

  getJsonHeaders():Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private getAuthHeaders() :Headers{
    const headers = this.getJsonHeaders();
    const token = localStorage.getItem(lsat);
    headers.append('Authorization', `Bearer ${token}`);
    return headers;
  }


  getAuthOptions(params?:URLSearchParams):RequestOptions{
    if(params){
      return new RequestOptions({ headers: this.getAuthHeaders(),search:params});
    }
    else {
      return new RequestOptions({ headers: this.getAuthHeaders()});
    }

  }


  getJsonOptions(params?:URLSearchParams):RequestOptions{
    if(params){
      return new RequestOptions({ headers: this.getJsonHeaders(),search:params});
    }
    else {
      return new RequestOptions({ headers: this.getJsonHeaders()});
    }

  }

  getLoginHeaders():Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + this.basicSecret);
    return headers;
  }

  /*
   官网例子


   */

  getErrMsg(error: Response | any){
    let errMsg: string;
    console.log(error.toString());
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);

  }


  //  异步获取 header，可以在其他组建的init中获取异步的header topMessage 组件，address 组件，都调用了这个。
  getAsyAuthHeaders(token:string){
    const headers = this.getJsonHeaders();
    headers.append('Authorization', `Bearer ${token}`);
    this.asyAuthHeaderSource.next(headers);
  }

}
