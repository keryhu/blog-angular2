import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {MdSnackBar} from "@angular/material";

import {UploadFileService} from "./upload-file.service";
import {ImgResizeService} from "./img-resize.service";
import {uploadErrMsg} from "../../../core";
import {DataURItoFileService} from "./data-urito-file.service";



@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  private uploadErrMsg: string;
  public waitUpload: boolean = false;   // 是否显示等待上传的icon
  private _startUpload:boolean=false;  //用户图片预览已经显示，点击 提交后的  显示等待的 状态
  private uploadSub: Subscription;

  private _showUpload=new BehaviorSubject(false);

  // 外面的属性要访问此 属性
  public uploadImg = new BehaviorSubject(''); // 用户上传后的img


  @Input() requestPart: string;  // 对应后台服务器，上传post url 的 @RequestParam("blogImage")

  @Input() acceptType: string;

  @Input() maxSize: number;      //能够接受的最大的 上传文件的 大小

  @Input() minResizeSize: number;  //resize 处理的，最小的文件大小

  @Input() saveUrl: string;  //图片默认的保存地址。

  @Input() resizeDimension: Object;  //图片需要resize 后的像素，宽度，高度。

  //当文件上传成功或失败后，给前台，父component一个回执
  @Output() uploadSuccess=new EventEmitter<boolean>();


  constructor(private uploadFileService:UploadFileService,
              private  imgResizeService:ImgResizeService,
              private snackBar: MdSnackBar,
              private dataUriToFileService:DataURItoFileService) { }

  ngOnInit() {}

  changeEvent(event): void {
    const file = event.target.files[0];

    if (file) {

      this.waitUpload = true;
      this.uploadErrMsg = undefined;
      this.uploadImg = new BehaviorSubject('');
      if (this.uploadFileService.isImg(file.type) &&
        file.size < this.maxSize) {

        let reader = new FileReader();
        const image: HTMLImageElement = document.createElement('img');
        reader.onloadend = ()=> {
          this.waitUpload = true;
          image.src = reader.result;
          //图片大于minResizeSize ,才做resize 处理
          if (file.size > this.minResizeSize) {
            const i = {
              width: 200,
              height: 250
            };

            this.imgResizeService.resizeStep(image, this.resizeDimension['width'],
              this.resizeDimension['height'])
              .subscribe(
                e=> {
                  if(e=='fail'){
                    this.showSnackBar( '文件未选择成功，请重试!','');
                    this.waitUpload = false;
                    this._showUpload.next(false);
                  }

                  else if(e&&e.startsWith('data:image/png;base64')){

                    this.waitUpload = false;
                    const m = {
                      status: true,
                      content: e
                    };

                    setTimeout(()=>{
                      this._showUpload.next(true);
                    },1000);

                    this.uploadImg.next(e);
                  }

                },
                err=> {
                  this.waitUpload = false;
                }
              )
          }
          //不做图片压缩处理的情形
          else {

            this.uploadImg.next(reader.result);
            this.waitUpload = false;

            this._showUpload.next(true);
          }
        };

        reader.readAsDataURL(file);

        this.uploadErrMsg = null;

      }
      else if (file.size >= this.maxSize) {
        this.showSnackBar( `图片不能超过${this.maxSize/1024} kb`,'');

        this.waitUpload = false;
      }
      else if (!this.uploadFileService.isImg(file.type)) {
        this.showSnackBar( uploadErrMsg,'');
        const m = {
          status: false
        };

        this.waitUpload = false;
      }
    }
    else {
      const m = {
        status: false
      };

      this.waitUpload = false;
    }

  }


  //开始上传文件

  uploadFile()
  {
    if(this.saveUrl){
      this._startUpload = true;
      console.log('上传成功4');
      const file = this.dataUriToFileService.dataURItoFile(this.uploadImg.getValue());
      console.log('resize 后,文件大小为: ' + file.size / 1024 + 'Kb');

      if (file) {
        this.uploadSub = this.uploadFileService.upload(this.saveUrl, file,this.requestPart)
          .subscribe(e=> {
            if (e && e.data) {
              if (e.data.hasOwnProperty('result')) {
                this.uploadSuccess.emit(true);
                this._startUpload = false;
                this._showUpload.next(false);
                this.waitUpload=false;
                this.uploadImg=undefined;
                this.showSnackBar('文件上传成功!','');
              }
            }

          }, err=> {
            //上传失败
            this.uploadSuccess.emit(true);
            this.showSnackBar('上传失败,请稍后再试!','');
            this._showUpload.next(false);
            this.waitUpload=false;
            this.uploadImg=undefined;
            this._startUpload = false;

          })
      }
    }

  }

  showUpload(){
    return this._showUpload;
  }

  startUpload()
  {
    return this._startUpload;
  }



  // 用户点击，取消上传 按钮粗发的事件，，恢复到服务器保存的的图片，将这条消息告诉前台。
  cancelUpload()
  {
    this.uploadImg=undefined;
    this._showUpload.next(false);
  }

  showSnackBar(message:string,action:string){
    this.snackBar.open(message,'', {
      duration: 3000
    });
  }
  ngOnDestroy()
  {
    if (typeof this.uploadSub!=='undefined') {
      this.uploadSub.unsubscribe();
    }
  }



}
