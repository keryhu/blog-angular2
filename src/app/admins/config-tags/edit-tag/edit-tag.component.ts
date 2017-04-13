import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MdSnackBar} from "@angular/material";
import {EditTagService} from "./edit-tag.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {

  @Input() allTags: string[];
  private submitted: boolean = false;
  private sub: Subscription;
  public form: FormGroup;

  constructor(private snackBar: MdSnackBar, private fb: FormBuilder,
              private editTagService: EditTagService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
        oldName: ['', Validators.required],
        newName: ['', Validators.required]
      },
      {validator: this.sameTag('oldName', 'newName')});
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

  formErrors = {'oldName': '', 'newName': ''};

  validationMessages = {
    'oldName': {'required': '请选择标签名.'},
    'newName': {'required': '请输入新的标签名.', 'sameTag': '不能与原标签名相同'}
  };

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

  onSubmit() {
    //this.showSnackBar('不能与原标签名相同','');
    console.log(this.form.value)
    this.sub=this.editTagService.update(this.form.value)
      .subscribe(
        e=>{
          console.log(e);
          if(e=='1'){
            // 为什么需要刷新下页面，这样父component，还有兄弟component，都可以 更新到最新的 tag数据库。
            location.reload();
          }
        },
        err=>{
          this.submitted=false;
          this.showSnackBar('更新标签失败，请稍后再试！','');
        }
      )

  }

  ngOnDestroy(): void {
    if (typeof this.sub != 'undefined') {
      this.sub.unsubscribe();
    }
  }

// 自定义  相同的tag 名字，错误提醒，验证
  sameTag(o: string, n: string) {
    return (group: FormGroup) => {
      let oldNameInput = group.controls[o];
      let newNameInput = group.controls[n];
      if (oldNameInput.value == newNameInput.value) {
        return newNameInput.setErrors({sameTag: true})
      }
    }
  }
}


