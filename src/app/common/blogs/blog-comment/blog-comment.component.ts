import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MdSnackBar} from "@angular/material";
import {BlogCommentService} from "./blog-comment.service";

@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.css']
})
export class BlogCommentComponent implements OnInit,OnDestroy {

  private ckToolbar=[
    ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat'],
    ['NumberedList', 'BulletedList','Outdent', 'Indent','Blockquote','JustifyLeft',
      'JustifyCenter','JustifyRight','JustifyBlock','-',
      'Link','Unlink','-','Smiley','SpecialChar','-','Undo', 'Redo'],
    '/',
    ['Styles','Format','Font','FontSize','-','TextColor','BGColor']
  ];


  // 前台配置这个就可以了，ckeditor
  public ckeditorConfig = {uiColor: '#666666',toolbar:this.ckToolbar};
  // 上面是传递给  file upload 组件的属性
  public form: FormGroup;
  private submitSub: Subscription;
//当点击登录按钮后，跳出来的 显示等待的图标
  public waitingLoading: boolean = false;

  // 前台 blog-detail将blog-id传过来，方便新的评论提交给后台。
  @Input()
  private blogId:string;


  constructor(private fb: FormBuilder, private snackBar: MdSnackBar,
              private blogCommentService: BlogCommentService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      petName: ['', Validators.required],  // 昵称
      content: [`<p></p>`, Validators.required],   // 评论内容
    });
    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.form) {
      return;
    }
    const form = this.form;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'petName': '',
    'content': ''
  };

  validationMessages = {
    'petName': {'required': '不能为空.'},
    'content': {'required': '不能为空.'}
  };

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

  onSubmit(){
    this.waitingLoading=true;
    const data={
      blogId:this.blogId,
      petName:this.form.value.petName,
      content:this.form.value.content
    };
    console.log(data);
    this.submitSub=this.blogCommentService.submitComment(data)
      .subscribe(
        e=>{
          this.waitingLoading=false;
          if(e=='1'){
            this.showSnackBar('发布评论成功！','');
            this.form.patchValue({
              petName: '',
              content: `<p></p>`
            });
            // 刷新下页面，这样就可以直接看到新的评论了，
            // 为什么不是将新的评论导给前台，因为这样没有commmentId
            location.reload();
          }
        },
        err=>{
          this.waitingLoading=true;
          console.log(err);
        }
      )

  }

  ngOnDestroy() {
    if (typeof this.submitSub !== 'undefined') {
      this.submitSub.unsubscribe();
    }
  }


}
