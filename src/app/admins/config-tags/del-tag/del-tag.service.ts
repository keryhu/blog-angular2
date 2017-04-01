import { Injectable } from '@angular/core';
import {delTagUrl,RequestService} from "../../../core";

import {Http,URLSearchParams} from "@angular/http";

@Injectable()
export class DelTagService {

  private url=delTagUrl;
  constructor(private http:Http,private requestService:RequestService) { }

  delTag(name:string){
    let params = new URLSearchParams();
    params.set('name', name);
    return this.http.delete(this.url,this.requestService.getAuthOptions(params))
      .map(e=>e.json());
  }

}
