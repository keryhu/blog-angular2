import { Component, OnInit } from '@angular/core';
import {aboutMeUrl,blogUrl,sourceCodeUrl,leaveMessageUrl} from "../index";

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

  constructor() { }

  ngOnInit() {
  }

}
