import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

import {adminHomeUrl} from "../../../core";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  private submitSub:Subscription;
  private submitted = false;
  private form:FormGroup;

  constructor(private title:Title,private fb:FormBuilder) { }

  ngOnInit() {
    this.setTitle();
    this.createForm();
  }

  setTitle() {
    this.title.setTitle('树己之路-发布博客');
  }

  createForm(){
    this.form=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.form) { return; }
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
    this.submitted=true;
  }
}
