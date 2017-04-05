import { Injectable } from '@angular/core';

import {Http} from "@angular/http";

import {getBlogUnusedImgUrl, RequestService} from "../../../core";

@Injectable()
export class AddBlogService {

  constructor(private http:Http,private requestService:RequestService) { }


}
