import { Injectable } from '@angular/core';
import {ErrMsgModel} from "./err-msg.model";

/*
 http 错误编码,指rest 请求的时候，出现的所有的提示信息，编码，
 例如login ， 用户名，密码错误，服务器返回的是 0101代码，前台需要对照 编码规则，将0101，转为 文字"用户名，密码错误"
 显示在前台页面。

 */
@Injectable()
export class HttpErrMsgConvertService {

  errMsgs:ErrMsgModel[]=[];
  constructor() {
    this.initErrMsgs();
  }

  // 根据提供的码号，返回对应的 显示的中文。 已经测试各种情形
  findValueByCode(code:string):string{
    const  r=this.errMsgs.filter(e=>e.code==code)[0];
    console.log(r);
    if(typeof (r)=='undefined'){
      return '';
    }
    else {
      return r.value;
    }

  }

  initErrMsgs():void{

    this.errMsgs=[
      {code:'0101',value:'用户名，密码错误'}
    ]
  }

}
