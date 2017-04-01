import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


import {addTagUrl,RequestService} from "../../../core";

@Injectable()
export class AddTagService {

  private url=addTagUrl;
  constructor(private http:Http,private requestService:RequestService) {
  }

  addTag(name:string){
    console.log(name);
    return this.http.post(this.url,name,this.requestService.getAuthOptions())
      .map(e=>e.json())
      .catch(this.requestService.getErrMsg);
  }
}
