import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import {newBlogCommentUrl, RequestService} from "../../../core";

@Injectable()
export class BlogCommentService {

  constructor(private http: Http, private request: RequestService) { }

  submitComment(data){
    const url=newBlogCommentUrl;
    return this.http.post(url,data,this.request.getJsonOptions())
      .map(e=>e.json());
  }

}
