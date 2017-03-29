import { Component, OnInit } from '@angular/core';
import {GetBlogFromDbService} from "../get-blog-from-db.service";
/**
 * 从数据库获取 已经发布的 博客，这里是值的 在  富文本编辑器中 编辑的 含有html标签的内容
 * （此内容是编辑器编辑后直接存在后台数据库）
 */

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.css']
})
export class BlogTemplateComponent implements OnInit {

  content:string;

  constructor(private blogService:GetBlogFromDbService) { }



  ngOnInit() {
  }

}
