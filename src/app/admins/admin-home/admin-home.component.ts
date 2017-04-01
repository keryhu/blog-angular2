import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Http} from "@angular/http";

import {RequestService,addBlogUrl,editBlogUrl} from "../../core";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  private msg:string;
  private addBlogUrl=addBlogUrl;
  private editBlogUrl=editBlogUrl;
  constructor(private title:Title,private requestService:RequestService,private http:Http) {
    this.getDataFromBlog();
  }

  ngOnInit() {
    this.setTitle();
  }
  setTitle() {
    this.title.setTitle('树己之路-管理员首页');
  }

  getDataFromBlog(){

    this.http.get('/api/blog-server/t',this.requestService.getAuthOptions())
      .subscribe(
        e=>{
          console.log(e['_body']);
          this.msg=e['_body'];
        }
      )


  }

}
