import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MdSnackBar} from "@angular/material";
import {Subscription} from "rxjs";
import {ReleaseTemplateService} from "./release-template.service";


@Component({
  selector: 'app-release-template',
  templateUrl: './release-template.component.html',
  styleUrls: ['./release-template.component.css']
})
export class ReleaseTemplateComponent implements OnInit, OnDestroy {

  // 上面是传递给  file upload 组件的属性
  public form: FormGroup;
  private submitSub: Subscription;
  // 给前台配置   ckeditor 的toolbar
  public ckeditorConfigJson = {uiColor: '#666666'};

  public selectedTags = [];

  public addedTag = '';
  public waitSubmitting=false;

  constructor(private fb: FormBuilder, private snackBar: MdSnackBar,
              private releaseTemplateService: ReleaseTemplateService) {
  }

  // 如果是 edit模式，还需要 blog id；
  @Input()
  private id:string;
  @Input()
  public titlePlaceholder: string;
  @Input()
  private titleContent:string;
  @Input()
  private ckPlaceholder: string;
  @Input()
  private ckContent:string;
  @Input()
  public descriptionPlaceholder:string;
  @Input()
  private descriptionContent:string;
  @Input()
  private saveUrl: string;
  @Input()
  private allTagsContent:Array<string>;
  @Input()
  public allTags: Array<string>;

  // 管理的类型，是add-发布新博客，还是edit，编辑原有博客
  @Input()
  private manageType:string;


  ngOnInit() {
    this.createForm();
    if(this.manageType=='edit'){
      this.form.controls['title'].setValue(`${this.titleContent}`);
      this.form.controls['ckContent'].setValue(`${this.ckContent}`);
      this.form.controls['description'].setValue(`${this.descriptionContent}`);
      this.selectedTags = this.allTagsContent;
    }
  }

  //为了 编写博客的时候，有预览功能。显示 带有格式的html到前端
  @ViewChild('dataContainer') dataContainer: ElementRef;

  createForm() {

    this.form = this.fb.group({
      title: ['', Validators.required],
      description: '',
      ckContent: [`<p>${this.ckPlaceholder}</p>`, Validators.required],
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
    'title': '',
    'ckContent': ''
  };

  validationMessages = {
    'title': {'required': '不能为空.'},
    'ckContent': {'required': '密码不能为空.'}
  };

  // 原生dom加载带有html格式的代码，为了 编写博客的时候，有预览功能
  loadData(data) {
    this.dataContainer.nativeElement.innerHTML = data;
  }

  closeTagName(name: string) {
    this.selectedTags = this.selectedTags.filter(e => e != name);
  }

  // 点击添加  标签促发的事件
  addTag() {
    if (this.addedTag != '') {
      this.selectedTags.push(this.addedTag);
    }
  }

  // 添加标签按钮，什么情况下，不能点击 添加标签 1，select多为空，
  // 2  或者已经添加过此标签了
  disabledAddTag() {
    return !this.addedTag || this.selectedTags.indexOf(this.addedTag) > -1;
  }

  // ckeditor  预览效果，后期删了
  onChange(content: any) {
    this.loadData(content)
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

  onSubmit() {
    this.waitSubmitting=true;
    const data = {
      title: this.form.value.title,
      description: this.form.value.description,
      content: this.form.value.ckContent,
      tags: this.selectedTags
    };
    if(this.manageType=='edit'&&this.id){
      data['id']=this.id;
    }

    this.submitSub = this.releaseTemplateService.releaseTemplate(this.saveUrl,
      data,this.manageType).subscribe(
      e => {
        this.waitSubmitting=false;
        if (e == "1") {
          this.showSnackBar('新博客发布成功', '')
          this.selectedTags = [];
          this.addedTag='';
          this.form.patchValue({
            title: '',
            description: '',
            ckContent: `<p>${this.ckPlaceholder}</p>`
          });
          // 刷新下页面，如果引用过图片，这样就可以通过刷新页面，重新加载未使用的图片
          location.reload();
        }
      },
      err => {
        this.waitSubmitting=true;
        this.showSnackBar('发布失败，请检查必填项！', '')
      }
    );

  }

  ngOnDestroy() {
    if (typeof this.submitSub !== 'undefined') {
      this.submitSub.unsubscribe();
    }
  }

}
