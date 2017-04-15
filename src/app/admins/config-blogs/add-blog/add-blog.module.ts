import { NgModule } from '@angular/core';

import {SharedModule,} from "../../../shared";
import {AddBlogComponent} from "./add-blog.component";
import {AddBlogRoutingModule} from "./add-blog-routing.module";
import {ManageBlogTemplateModule} from "../manage-blog-template";



@NgModule({
  imports: [SharedModule,AddBlogRoutingModule,
    ManageBlogTemplateModule],
  declarations: [AddBlogComponent],
  exports:[AddBlogComponent]
})
export class AddBlogModule { }
