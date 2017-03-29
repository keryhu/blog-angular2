import { Injectable } from '@angular/core';
import {Blog} from "../../shared";


/**
 *  从数据库中取出  已经存钱的博客内容 的service
 */
@Injectable()
export class GetBlogFromDbService {

  blog1:Blog={
    title:'第一个博客',
    content:'这是第一个展示的博客'
  }
  blog2:Blog={
    title:'第二个博客',
    content:'这是第二个展示的博客'
  }
  blog3:Blog={
    title:'第三个博客',
    content:'这是第三个展示的博客'
  }

  private _blogs:Blog[]=[this.blog1,this.blog2,this.blog3];

  constructor() { }

  get blogs(){
    return this._blogs;
  }

  set blogs(b:Blog[]){
    this._blogs=b;
  }


}
