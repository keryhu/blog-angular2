import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

import {delCommentUrl, lsat} from "../../../core";


@Injectable()
export class CommentDisplayService {

  constructor(private http:Http) { }

  delComment(data){
    const headers = new Headers();
    const token = localStorage.getItem(lsat);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
    let options = new RequestOptions({
      headers: headers,
      body : data
    });
    return this.http.delete(delCommentUrl,options)
      .map(e=>e.json());
  }

}
