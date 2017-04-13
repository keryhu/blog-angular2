import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DataURItoFileService} from "./data-urito-file.service";

@Injectable()
export class ImgResizeService {

  private canvas = document.createElement('canvas');
  constructor(private dataUriToFileService:DataURItoFileService) { }


  // step down 算法 ,
  public resizeStep(img, width, height, quality = 1.0): Observable<string> {
    console.log('原图片的宽为: ' + img.naturalWidth + ' , 高为: ' + img.naturalHeight);

    // 必须要单设这样设置，否则会报错，而且DataURItoFileService，需要单独分开
    const dataUritoFileS=this.dataUriToFileService;
    const canvas = document.createElement('canvas');
    const context = this.getContext(canvas);
    const type = 'image/png';
    const _dataUrl = new BehaviorSubject('');
    let cW = img.naturalWidth;
    let cH = img.naturalHeight;
    let tmp = null;

    if(cW==0||cH==0){
      _dataUrl.next('fail');
      return _dataUrl;
    }

    function stepDown() {
      cW = Math.max(cW / 2, width) | 0;
      cH = Math.max(cH / 2, height) | 0;
      canvas.width = cW;
      canvas.height = cH;
      context.drawImage(tmp || img, 0, 0, cW, cH);
      const dataUrl = canvas.toDataURL(type, quality);
      console.log('上传成功7');
      if (cW <= width || cH <= height) {
        console.log('上传成功8');
        _dataUrl.next(dataUrl);
        console.log('上传成功9');
        const f =dataUritoFileS.dataURItoFile(dataUrl);
        console.log('resize 后,文件大小为: ' + f.size / 1024 + ' Kb');
        return _dataUrl;
      }
      if (!tmp) {
        tmp = new Image();
        tmp.onload = stepDown;
      }
      tmp.src = dataUrl;
    };

    if (cW <= width || cH <= height || cW / 2 < width || cH / 2 < height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL(type, quality);
      const f = dataUritoFileS.dataURItoFile(dataUrl);
      console.log('resize 后,文件大小为: ' + f.size / 1024 + ' Kb');
      _dataUrl.next(dataUrl);
    }
    else {
      stepDown();
    }
    return _dataUrl;
  }




  private getContext(canvas) {
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = true;
    context.mozImageSmoothingEnabled = true;
    context.oImageSmoothingEnabled = true;
    return context;
  }



}
