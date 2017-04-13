import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {MdSnackBar} from "@angular/material";

import {tagNameHasExist} from "../../../core";
import {AddTagService} from "./add-tag.service";


@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit,OnDestroy {

  public form:FormGroup;
  private submitted:boolean=false;

  private sub:Subscription;
  constructor(private fb:FormBuilder,private addTagService:AddTagService,
              private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.createForm();
  }



  createForm(){
    this.form=this.fb.group({
      name:['',Validators.required]
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

  formErrors = {'name': ''};

  validationMessages = {
    'name': {'required': '标签名不能为空.'}
  };


  onSubmit() {
    // 防止重复提交
    this.submitted=true;
    this.sub=this.addTagService.addTag(this.form.value)
      .subscribe(
        e=>{
          this.submitted=false;
          if(e=='1'){
            // 为什么需要刷新下页面，这样父component，还有兄弟component，都可以 更新到最新的 tag数据库。
            location.reload();
          }
          else if(e==tagNameHasExist){
            this.showSnackBar('此标签已存在，无需重复！','');
          }
        },
        err=>{
          this.submitted=false;
          this.showSnackBar('保存标签失败，请稍后再试！','');
        }
      );
  }

  showSnackBar(message:string,action:string){
    this.snackBar.open(message,'', {
      duration: 3000
    });
  }

  ngOnDestroy(): void {
    if(typeof this.sub!='undefined'){
      this.sub.unsubscribe();
    }
  }

}
