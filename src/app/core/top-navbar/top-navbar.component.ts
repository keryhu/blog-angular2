import { Component, OnInit } from '@angular/core';
import {aboutMeUrl, blogUrl, sourceCodeUrl, leaveMessageUrl, loginUrl} from "../index";
import {AuthService} from "../auth";

@Component({
  selector: 'app-top-navbar',
  templateUrl: 'top-navbar.component.html',
  styleUrls: ['top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  aboutMeUrl=aboutMeUrl;
  blogUrl=blogUrl;
  sourceCodeUrl=sourceCodeUrl;
  leaveMessageUrl=leaveMessageUrl;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
//异步查看当前用户有没有登录
  getLoggedIn() {
    return this.authService.getLoggedIn();
  }

  logout() {
    this.authService.logout();
    return false;
  }

  ngOnDestroy(): void {

  }
}
