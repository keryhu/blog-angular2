import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {lsat, supportImgType} from "../../../core";

@Injectable()
export class UploadFileService {

  constructor() { }

  upload(url:string,file:File,requestPart:string):Observable<{complate:number,progress?:number,data?:Object}>{

    return Observable.create(observer => {
      const formData:FormData = new FormData(),
        xhr:XMLHttpRequest = new XMLHttpRequest();
      formData.append(requestPart, file);


      xhr.open('POST',url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next({complate:1,progress:100,data:JSON.parse(xhr.response)});
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        observer.next({complate:0,progress:Math.round(event.loaded / event.total * 100)});
      };

      let token: string = localStorage.getItem(lsat);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(formData);
    }).share();
  }


  //检查上传文件的格式是否符合要求,要求是 jpg,png,gif 四种,其他的都不符合要求。
  isImg(type:string):boolean{

    // 取出 除了'image/' 后的字符串

    let last:string=type.substring(6).toLowerCase();
    return supportImgType.some(e=>e===last);

  }



}
