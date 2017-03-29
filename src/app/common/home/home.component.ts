import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";



import {aboutMeUrl, blogUrl} from "../../core";

// 增加博客 标签分类
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  aboutMeUrl=aboutMeUrl;
  blogUrl=blogUrl;
  ckeditorContent:string;


  onChange() { }
  onReady() {
    console.log(this.ckeditorContent);
  }
  onBlur(){
    console.log(this.ckeditorContent);
  }
  onFocus(){}



  constructor(private title:Title) { }

  ngOnInit() {
    this.setTitle();
    // 设置 初始化的内容 不能设置为''
    this.ckeditorContent = `<p></p>`;


  }

  setTitle() {
    this.title.setTitle('树己之路');
  }



}
