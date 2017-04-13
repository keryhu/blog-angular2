import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {ShowUnusedImgComponent} from "../../../shared";

//  为了管理员能够 发布新博客和编辑博客，增加了这个模版，如果是新发的博客，里面都是空白的，
// 如果是 编辑旧的博客，就把旧的内容，传递进来就行
@Component({
  selector: 'app-manage-blog-template',
  templateUrl: './manage-blog-template.component.html',
  styleUrls: ['./manage-blog-template.component.css']
})
export class ManageBlogTemplateComponent implements OnInit {

  // 标题
  public wholeTitle:string;
  // 当点击 "我要上传图片"，则 开始显示 未被使用的图片。
  public loadingUnUsedImg=false;

  // 管理的类型，是add-发布新博客，还是edit，编辑原有博客
  @Input()
  public manageType:string;

  // 发布博客  模版的一些变量，这些变量从上有  add-blog。comonent传来，
  // 再传给 ReleaseTemplateModule
  @Input()
  public id:string;
  @Input()
  public titlePlaceholder: string;
  @Input()
  public titleContent:string;
  @Input()
  public ckPlaceholder: string;
  @Input()
  public ckContent:string;
  @Input()
  public descriptionPlaceholder:string;
  @Input()
  public descriptionContent:string;
  @Input()
  public saveUrl: string;
  @Input()
  public allTagsContent:Array<string>;
  @Input()
  public allTags: Array<string>;

  @ViewChild(ShowUnusedImgComponent)
  private showUnusedImgComponent: ShowUnusedImgComponent;

  constructor() {
  }

  ngOnInit() {
    if(this.manageType=='add'){
      this.wholeTitle='发布新博客';
    }
    else if(this.manageType=='edit'){
      this.wholeTitle='编辑博客';
    }
  }


  // 用户点击，我要上传图片，显示下面上传图片的具体 操作区域
  showUpload(){
    this.loadingUnUsedImg=true;
    this.showUnusedImgComponent.loadServerImg();

  }
   // 用户点击,隐藏上传图片功能。通过 变量loadingUnUsedImg 传递给 child component
  hideUpload(){
    this.loadingUnUsedImg=false;
  }

}
