import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

import {publishBlogUrl, SpinnerService} from "../../../core";


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {


  // 发布博客属性
  public titlePlaceholder='新博客标题';
  public ckPlaceholder='新博客内容...';
  public descriptionPlaceholder='新博客描述 (可选)';
  public allTags=[];
  public publishBlogUrl=publishBlogUrl;
  // 这个是区分，新增加博客，还是编辑博客的 标识符
  public manageType='add';
  constructor(private title: Title,private route: ActivatedRoute,
              private spinner: SpinnerService) {
  }

  ngOnInit() {
    this.setTitle();
    this.spinner.stop();
    this.allTags=this.route.snapshot.data['tags'];
  }

  setTitle() {
    this.title.setTitle('树己之路-发布博客');
  }



}
