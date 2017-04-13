import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

import {RequestService, simpleBlogUrl} from "../../../core";


@Injectable()
export class SimpleBlogService {

  constructor(private http: Http, private requestService: RequestService) {
  }

  // ／blog 页面，显示 简略的博客，如果提供参数，则获取到的是带参数的对象

  getSimpleBlog(params?: URLSearchParams) {
    const url = simpleBlogUrl;
    return this.http.get(url, this.requestService.getJsonOptions(params))
      .map(e => e.json());
  }

}
