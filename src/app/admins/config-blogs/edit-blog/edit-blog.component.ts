import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";


import {blogUrl, serverUpdateBlogUrl} from "../../../core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";


/*

 */
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit,OnDestroy {

  public blogUrl=blogUrl;
  private editBlog:any;

  // 发布博客属性
  public titlePlaceholder='博客标题';
  public ckPlaceholder='博客内容...';
  public descriptionPlaceholder='博客描述 (可选)';
  public allTags=[];
  //private publishBlogUrl=publishBlogUrl;
  // 这个是区分，新增加博客，还是编辑博客的 标识符
  public manageType='edit';
  public titleContent:string;
  public ckContent:string;
  public descriptionContent:string;
  public allTagsContent:Array<string>;
  public saveUrl=serverUpdateBlogUrl;
  public blogId:string;
  private paramsSub: Subscription;

  constructor(private title:Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setTitle();
    this.getUrlParam();
    this.editBlog = this.route.snapshot.data['editBlog'];
    this.allTags=this.route.snapshot.data['tags'];

    this.titleContent=this.editBlog.title;
    this.ckContent=this.editBlog.content;
    this.descriptionContent=this.editBlog.description;
    this.allTagsContent=this.editBlog.tags;

  }

  getUrlParam(){
    this.paramsSub = this.route.queryParams.subscribe(
      e=>{this.blogId=e['id'];},
      err=>{}
    )}

  setTitle() {
    this.title.setTitle('树己之路-编辑博客');
  }

  ngOnDestroy() {
    if (typeof this.paramsSub!=='undefined') {
      this.paramsSub.unsubscribe();
    }
  }

}
