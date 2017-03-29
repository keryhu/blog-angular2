import {Component, Input, OnInit} from '@angular/core';

/*
 此类用在 blog，共享代码，评论component 前台获取数据库 富文本 的 component 组建，

 作用：将含有html格式的文本，转为前台的显示形式。
 */
@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.css']
})
export class RichTextComponent implements OnInit {

// 前台已经将不同的richText 富文本数据库获取到了，这里只是用来接受
  @Input()
  content:string;


  constructor() { }

  ngOnInit() {
  }


}
