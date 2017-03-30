import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {RequestService} from "../../core/auth/request.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  private msg:string;
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

    const h=this.requestService.getAuthHeaders();
    this.http.get('/api/blog-server/t',{headers:this.requestService.getAuthHeaders()})
      .subscribe(
        e=>{
          console.log(e['_body']);
          this.msg=e['_body'];
        }
      )


  }
}
