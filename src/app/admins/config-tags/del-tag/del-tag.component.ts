import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MdSnackBar} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DelTagService} from "./del-tag.service";

@Component({
  selector: 'app-del-tag',
  templateUrl: './del-tag.component.html',
  styleUrls: ['./del-tag.component.css']
})
export class DelTagComponent implements OnInit ,OnDestroy{

  @Input() allTags:string[];

  private submitted:boolean=false;
  private sub:Subscription;
  private form:FormGroup;
  constructor(private snackBar: MdSnackBar,private fb:FormBuilder,
              private delTagService:DelTagService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form=this.fb.group({
      selectedTag:['',Validators.required]
    });


  }

  showSnackBar(message:string,action:string){
    this.snackBar.open(message,'', {
      duration: 3000
    });
  }


  onSubmit(){
    // 防止重复提交
    this.submitted=true;
    console.log(this.form.value.selectedTag);
    this.sub=this.delTagService.delTag(this.form.value.selectedTag)
      .subscribe(
        e=>{
          this.submitted=false;
          if(e=='1'){
            // 为什么需要刷新下页面，这样父component，还有兄弟component，都可以 更新到最新的 tag数据库。
            location.reload();
          }
          else {
            this.showSnackBar(`${this.form.value.selectedTag} 标签删除失败，请重试！`,'');
          }
        },
        err=>{
          this.submitted=false;
          this.showSnackBar(`${this.form.value.selectedTag} 标签删除失败，请重试！`,'');
        }
      )
  }


  ngOnDestroy(): void {
    if(typeof this.sub!='undefined'){
      this.sub.unsubscribe();
    }
  }
}
