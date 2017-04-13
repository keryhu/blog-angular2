import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {DateParseModule} from "../../../shared";


import {BlogSimpleComponent} from "./blog-simple.component";

@NgModule({
  imports: [CommonModule,MaterialModule,DateParseModule],
  declarations: [BlogSimpleComponent],
  exports:[BlogSimpleComponent]
})
export class BlogSimpleModule { }
