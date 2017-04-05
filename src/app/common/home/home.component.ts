import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";



import {aboutMeUrl, blogUrl} from "../../core";
import {SpinnerService} from "../../core/spinner/spinner.service";

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


  ckToolbar=[
    ['Preview','-','Cut','Copy','Paste','PasteText', 'Undo', 'Redo','-',
      'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat'],

    ['NumberedList', 'BulletedList','Outdent', 'Indent','Blockquote','JustifyLeft',
      'JustifyCenter','JustifyRight','JustifyBlock','-',
      'Link','Unlink','-','Image','Table','Smiley','SpecialChar'],
    '/',
    ['Styles','Format','Font','FontSize','-','TextColor','BGColor']
  ];

  ckeditorConfigJson={uiColor: '#666666',toolbar:this.ckToolbar};

  ckeditorConfigString=JSON.stringify(this.ckeditorConfigJson);


  onChange() { }
  onReady() {
    console.log(this.ckeditorContent);
  }
  onBlur(){
    console.log(this.ckeditorContent);
  }
  onFocus(){}



  constructor(private title:Title,private spinner: SpinnerService) { }

  ngOnInit() {
    this.setTitle();
    // 设置 初始化的内容 不能设置为''
    this.ckeditorContent = `<p></p>`;
    this.spinner.stop();

  }

  setTitle() {
    this.title.setTitle('树己之路');
  }



}
