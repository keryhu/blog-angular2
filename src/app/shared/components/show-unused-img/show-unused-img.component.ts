import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ShowUnusedImgService} from "./show-unused-img.service";
import {Observable, Subscription} from "rxjs";
import {MdSnackBar} from "@angular/material";
import {
  blogImageUploadUrl, blogImgUploadRequestPart, imgAcceptType, imgMaxSize, imgResizeDimension,
  imgResizeMinSize
} from "../../../core/index";

@Component({
  selector: 'app-show-unused-img',
  templateUrl: './show-unused-img.component.html',
  styleUrls: ['./show-unused-img.component.css']
})
export class ShowUnusedImgComponent implements OnInit, OnDestroy {

  private unUsedImgs:any;
  private hasUnusedImg = true;
  private showSub: Subscription;
  private rmSub: Subscription;
  private waitingShowing = false;
  private waitingRemoving = false;

  //-------图片上传的属性变量------

  //能够接受的上传文件的格式。
  private acceptType: string = imgAcceptType
  private maxSize: number = imgMaxSize;  //最大4Mb的图片
  private minResizeSize: number = imgResizeMinSize;  //resize 处理的，最小的文件大小、
  private imageSaveUrl = blogImageUploadUrl;
  private resizeDimension = imgResizeDimension;
  private imgUploadUrl = blogImageUploadUrl;
  private imgUploadRequestPart = blogImgUploadRequestPart;




  constructor(private showUnusedImgService: ShowUnusedImgService,
              private snackBar: MdSnackBar) {
  }

  //----默认是不显示此component，只有父component，click"显示"的时候，才显示，
  // 当然 父 manage-blog-template component也可以手动关掉此component

  @Input()
  public displayThisComponent: boolean;

  ngOnInit() {
  }

  // manage-blog-template 父component，点击"我要上传图片"，
  // 此方法，就调用服务器端的图片
  loadServerImg() {
    this.waitingShowing=true;
    this.showSub=this.showUnusedImgService.showUnusedImgUrl()
      .subscribe(
        e=>{
          this.unUsedImgs=e;
          this.hasUnusedImg=e.length>0;
          this.waitingShowing=false;}
      );
   // this.showUnusedImgService.showUnusedImgUrl();

  }
  // 点击删除图片 按钮促发的方法。
  rmImg(url:string){

    this.waitingRemoving=true;
    console.log(url);
    this.rmSub=this.showUnusedImgService.rmImg(url).subscribe(
      e=>{
        this.waitingRemoving=false;
        if(e=='1'){
          this.showSnackBar('删除成功！','');
          this.unUsedImgs=this.unUsedImgs.filter(e=>e!=url);
        }
        console.log(e);
      },
      err=>{
        this.waitingRemoving=false;
        console.log(err);
        this.showSnackBar('删除失败，稍后再试！','');
      }
    )

  }

  //监听来自文件上传的动作。采取下一步错误
  listenImgUpload(value:boolean){
    if(value){
      this.loadServerImg();
    }
  }


  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

  ngOnDestroy() {
    if (typeof this.showSub !== 'undefined') {
      this.showSub.unsubscribe();
    }

    if (typeof this.rmSub !== 'undefined') {
      this.rmSub.unsubscribe();
    }
  }


}
