import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
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

    HttpModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    CKEditorModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
