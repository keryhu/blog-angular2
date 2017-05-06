import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";



import {aboutMeUrl, blogUrl,SpinnerService} from "../../core";

// 增加博客 标签分类
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {


  aboutMeUrl=aboutMeUrl;
  blogUrl=blogUrl;

  constructor(private title:Title,private spinner: SpinnerService) { }

  ngOnInit() {
    this.setTitle();
    this.spinner.stop();

  }

  setTitle() {
    this.title.setTitle('树己之路');
  }



}
