import { NgModule } from '@angular/core';

import {SharedModule} from "../../../shared";

import {EditBlogComponent} from "./edit-blog.component";
import {EditBlogRoutingModule} from "./edit-blog-routing.module";
import {EditBlogResolveService} from "./edit-blog-resolve.service";
import {ManageBlogTemplateModule} from "../manage-blog-template";

@NgModule({
  imports: [SharedModule,EditBlogRoutingModule,ManageBlogTemplateModule],
  declarations: [EditBlogComponent],
  providers:[EditBlogResolveService],
  exports:[EditBlogComponent]
})
export class EditBlogModule { }
