import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdCardModule, MdChipsModule, MdTooltipModule} from "@angular/material";
import {DateParseModule} from "../../../shared";


import {BlogSimpleComponent} from "./blog-simple.component";

@NgModule({
  imports: [CommonModule,MdCardModule,MdChipsModule,MdTooltipModule,DateParseModule],
  declarations: [BlogSimpleComponent],
  exports:[BlogSimpleComponent]
})
export class BlogSimpleModule { }
