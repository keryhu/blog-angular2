import { Injectable } from '@angular/core';

@Injectable()
export class DataURItoFileService {

  constructor() { }

  // 必须要单独分开，否则im-resize service无法调用
  // 将base64,image 转为 img file
  dataURItoFile(dataURI:string):File{
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = decodeURI(dataURI.split(',')[1]);

    // separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const f=new Blob([ia], {type:mimeString});
    return  <File>f;
  }


}
