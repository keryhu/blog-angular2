import { Injectable } from '@angular/core';
import {Http,URLSearchParams} from "@angular/http";

import {RequestService, serverDelBlogUrl} from "../../../core";


@Injectable()
export class BlogDetailService {

  constructor(private http:Http,private requestService:RequestService) { }

  delBlog(blogId:string){

    const url=serverDelBlogUrl;
    let params = new URLSearchParams();
    params.set('blogId', blogId);
    return this.http.delete(url,this.requestService.getAuthOptions(params))
      .map(e=>e.json());
  }

}
