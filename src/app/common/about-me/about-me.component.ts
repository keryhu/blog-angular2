import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {blogUrl} from "../../core";
import {Hobby} from "../../shared";




@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  // 关于我的，一些爱好，简介
  hobbyNames:string[]=[];
  hobbyValues:string[]=[];


  hobbies:Hobby[]=[
    {name:'英文名',value:'Kery.Hu'},
    {name:'爱好',value:'游泳、围棋'},
    {name:'座右铭',value:'没有想好，请先停下！'},
    {name:'地点',value:'上海'},
    {name:'领域',value:'Java，人工智能，大数据'},
    {name:'邮箱',value:'keryhu@hotmail.com'},
  ];

  blogUrl=blogUrl;

  constructor(private title:Title) { }

  ngOnInit() {
    this.setTitle();
    this.hobbies.forEach(e=>{
    this.hobbyNames.push(e.name);
    this.hobbyValues.push(e.value);
    })
  }

  setTitle() {
    this.title.setTitle('树己之路-关于我');
  }

}
