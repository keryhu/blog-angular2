import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent,PageNotFoundComponent } from './common';
import {CoreModule} from "./core";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared";
import {CKEditorModule} from "ng2-ckeditor";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    //不能放在  coreModule
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    CKEditorModule,
    // 只能放在appModule，不能放在CoreModule里面


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
