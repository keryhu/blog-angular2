import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RichTextModule} from "../../../shared";
import {BlogTemplateComponent} from "./blog-template.component";

@NgModule({
  imports: [CommonModule,RichTextModule],
  declarations: [BlogTemplateComponent],
  exports:[BlogTemplateComponent]
})
export class BlogTemplateModule { }
