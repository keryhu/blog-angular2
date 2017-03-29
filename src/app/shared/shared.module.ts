import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";


import {BaiduGoogleAdModule} from "./components";



// 不需要将全局service 放在 SharedModule
// declare all components, directives, and pipes in the SharedModule.（
// 非启动的时候需要的，且不止一个需要），非全局需要的
@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule,MaterialModule,BaiduGoogleAdModule,
  ],
  //declarations: [],
  exports:[CommonModule,FormsModule,ReactiveFormsModule,MaterialModule,BaiduGoogleAdModule,
  ]
})
export class SharedModule { }
