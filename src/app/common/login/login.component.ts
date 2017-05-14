import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService,lsat} from "../../core";

import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private submitted = false;
  public loginErrMsg='';
  private loginSub: Subscription;
  public form:FormGroup;
  //当点击登录按钮后，跳出来的 显示等待的图标
  public waitingLoading: boolean = false;

  constructor(private title:Title,private fb:FormBuilder,
              private authService:AuthService, private router: Router) { }


  ngOnInit() {
    this.setTitle();
    this.createForm();
  }

  setTitle() {
    this.title.setTitle('树己之路-登陆');
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
    this.waitingLoading=true;
    this.loginSub =this.authService.login(this.form.value.username,this.form.value.password)
      .subscribe(
        r=>{
          if(r){
            //如果之前存储了试图访问的url, 那么就导航到此url
            if (this.authService.redirectUrl) {
              this.router.navigate([this.authService.redirectUrl]);
            }
            else {
              this.router.navigate(['/admin']);
            }
          }
        },
        err=>{
          localStorage.removeItem(lsat);
          this.waitingLoading=false;
          this.submitted=false;
          if(err=='invalid_grant'){
            console.log(err);
            this.loginErrMsg='用户名，密码不匹配，请重新登录！';
          }

        }
      );
  }

  ngOnDestroy() {
    if (typeof this.loginSub !== 'undefined') {
      this.loginSub.unsubscribe();
    }
  }

}
