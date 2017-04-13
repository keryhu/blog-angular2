import {Component, Input, OnInit} from '@angular/core';
import {SimpleBlog} from "../simple-blog.model";
import {blogUrl} from "../../../core/index";



@Component({
  selector: 'app-blog-simple',
  templateUrl: './blog-simple.component.html',
  styleUrls: ['./blog-simple.component.css']
})
export class BlogSimpleComponent implements OnInit {

  private tags = [];
  public detailBlogUrl:string;


  constructor() {
  }

  // 从blog。component 前台组件获取到当前后台数据库中的 简略版本博客的内容
  @Input()
  public simpleblog: SimpleBlog;

  ngOnInit() {
    this.tags = this.simpleblog.tags;
    this.detailBlogUrl=`${blogUrl}/${this.simpleblog.id}`;
  }

}
