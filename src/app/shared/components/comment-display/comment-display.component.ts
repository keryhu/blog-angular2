import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MdSnackBar} from "@angular/material";


import {CommentDisplay} from "../../models";
import {Observable} from "rxjs";
import {CommentDisplayService} from "./comment-display.service";



@Component({
  selector: 'app-comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css']
})
export class CommentDisplayComponent implements OnInit {

  constructor(private commentDisplayService: CommentDisplayService,
              private snackBar: MdSnackBar) {
  }

  @Input()
  public commentDisplay: CommentDisplay;

  // 删除某个具体的博客的时候，需要
  @Input()
  private blogId: string;


  // 从父comonent传递进来，表示用户有没有登录。，
  // 此component不能直接调用authServer

  @Input()
  public isLoggedIn: Observable<boolean>;

  //显示 带有格式的html到前端
  @ViewChild('dataContainer') dataContainer: ElementRef;

  ngOnInit() {
    this.loadData(this.commentDisplay.content);
  }


  delComment() {

    const data = {
      blogId: this.blogId,
      commentId: this.commentDisplay.id
    };

    this.commentDisplayService.delComment(JSON.stringify(data))
      .subscribe(
        e => {
          console.log(e);
          if (e == '1') {
            this.showSnackBar('删除评论成功！','');
            // 刷新下页面，如果引用过图片，这样就可以通过刷新页面，重新加载未使用的图片
            location.reload();
          }
        },
        err => {
          this.showSnackBar('删除评论失败！','');
        }
      )

    console.log(data);
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

  // 原生dom加载带有html格式的代码
  loadData(data) {
    this.dataContainer.nativeElement.innerHTML = data;
  }
}
