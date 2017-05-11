import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SimpleBlog} from "../simple-blog.model";
import {blogUrl} from "../../../core/index";



@Component({
  selector: 'app-blog-simple',
  templateUrl: './blog-simple.component.html',
  styleUrls: ['./blog-simple.component.css']
})
export class BlogSimpleComponent implements OnInit,OnChanges {


  private tags = [];
  public  detailBlogUrl:string;

  constructor() {
  }

  // 从blog。component 前台组件获取到当前后台数据库中的 简略版本博客的内容
  @Input()
  public simpleblog: SimpleBlog;


  ngOnInit() {
    this.tags = this.simpleblog.tags;
    this.detailBlogUrl=`${blogUrl}/${this.simpleblog.id}`;
  }

  // 必须要使用这个  implements OnChanges，因为 BlogSimpleComponent是一个child component
  //  每次前台BlogHomeComponent 更新 blog数据的时候，
  // this.detailBlogUrl 是通过计算 后，获取的数据，仅仅通过ngOnInit 无法刷新 detailBlogUrl的值。
  ngOnChanges(changes: SimpleChanges): void {
    this.detailBlogUrl=`${blogUrl}/${this.simpleblog.id}`;
  }

}
