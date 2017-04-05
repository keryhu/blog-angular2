import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogTemplateComponent} from "./blog-template.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BlogTemplateComponent],
  exports:[BlogTemplateComponent]
})
export class BlogTemplateModule { }
