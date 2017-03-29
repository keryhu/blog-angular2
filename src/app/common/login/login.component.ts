import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private submitted = false;
  private loginErrMsg='';
  constructor(private title:Title,private fb:FormBuilder,private authService:AuthService) { }

  form:FormGroup;
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
    this.submitted=true;
    this.authService.login(this.form.value.username,this.form.value.password)
      .subscribe(
        r=>{
          console.log(r)
        },
        err=>{
          if(err=='invalid_grant'){
            console.log(err);
            this.loginErrMsg='用户名，密码不匹配，请重新登录！';
          }

        }
      );
  }

}