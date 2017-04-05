import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

import {
  blogImageUploadUrl, blogImgUploadRequestPart, imgAcceptType, imgMaxSize, imgResizeDimension,
  imgResizeMinSize,SpinnerService
} from "../../../core";
import {Observable, Subscription} from "rxjs";
import {AddBlogService} from "./add-blog.service";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  private submitSub: Subscription;
  private submitted = false;

  //能够接受的上传文件的格式。
  private acceptType: string = imgAcceptType
  private maxSize: number = imgMaxSize;  //最大4Mb的图片
  private minResizeSize: number = imgResizeMinSize;  //resize 处理的，最小的文件大小、
  private imageSaveUrl = blogImageUploadUrl;
  private resizeDimension = imgResizeDimension;
  private imgUploadUrl = blogImageUploadUrl;
  private imgUploadRequestPart = blogImgUploadRequestPart;

  // 上面是传递给  file upload 组件的属性
  private form: FormGroup;

  constructor(private title: Title, private fb: FormBuilder, private addBlogService: AddBlogService,
              private spinner: SpinnerService) {
  }

  ngOnInit() {
    this.setTitle();
    this.spinner.stop();
    this.createForm();
  }

  setTitle() {
    this.title.setTitle('树己之路-发布博客');
  }


  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
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
    'username': '',
    'password': ''
  };

  validationMessages = {
    'username': {'required': '用户名不能为空.'},
    'password': {'required': '密码不能为空.'}
  };


  onSubmit() {
    this.submitted = true;
  }

  ngOnDestroy() {
    if (typeof this.submitSub !== 'undefined') {
      this.submitSub.unsubscribe();
    }
  }
}
