import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import {RequestService,updateTagUrl} from "../../../core";

@Injectable()
export class EditTagService {

  private url=updateTagUrl;
  constructor(private http:Http,private requestService:RequestService) { }

  update(updateTag){
    return this.http.put(this.url,JSON.stringify(updateTag),this.requestService.getAuthOptions())
      .map(e=>e.json());
  }
}
