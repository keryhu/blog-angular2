import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";


import {SpinnerService, aboutMeUrl, blogUrl, AuthService, editBlogUrl} from "../../../core";
import {BlogDetailService} from "./blog-detail.service";
import {MdSnackBar} from "@angular/material";


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  public detailBlog: any;
  private blogId: string;
  public detailBlogUrl: string;
  public aboutMeUrl = aboutMeUrl;


  constructor(private title: Title, private spinner: SpinnerService,
              private router: Router, private route: ActivatedRoute,
              private authService: AuthService,private snackBar: MdSnackBar,
              private blogDetailService:BlogDetailService) {
  }

  //显示 带有格式的html到前端
  @ViewChild('dataContainer') dataContainer: ElementRef;

  ngOnInit() {
    this.setTitle();
    this.spinner.stop();
    this.detailBlog = this.route.snapshot.data['detailBlog'];
    this.loadData(this.detailBlog.content);
  }

  setTitle() {
    this.title.setTitle('树己之路-博客');
    this.blogId = this.route.snapshot.data['detailBlog']['id'];
    this.detailBlogUrl = `${blogUrl}/${this.blogId}`;
  }

  //异步查看当前用户有没有登录
  getLoggedIn() {
    return this.authService.getLoggedIn();
  }

  //管理员，点击 编辑 博客按钮促发的事件,带上blogId，参数，导航到 edit-blog页面
  editBlog(){
    //this.editMode=!this.editMode;
    this.router.navigate([editBlogUrl],
      {queryParams: {id:this.detailBlog.id} });
  }

  //管理员，点击 删除 博客按钮促发的事件
  delBlog(){

    this.blogDetailService.delBlog(this.detailBlog.id)
      .subscribe(
        e=>{
          if(e=='1'){
            this.showSnackBar('删除博客成功！','');
            this.router.navigate([blogUrl]);
          }
        },
        err=>{
          this.showSnackBar('删除博客失败！','');
          console.log(err);
        }
      )

  }

  showSnackBar(message:string,action:string){
    this.snackBar.open(message,'', {
      duration: 3000
    });
  }

  // 原生dom加载带有html格式的代码
  loadData(data) {
    this.dataContainer.nativeElement.innerHTML = data;
  }
}
