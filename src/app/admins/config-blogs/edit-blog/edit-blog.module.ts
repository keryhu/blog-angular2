import { NgModule } from '@angular/core';

import {SharedModule} from "../../../shared";

import {EditBlogComponent} from "./edit-blog.component";
import {EditBlogRoutingModule} from "./edit-blog-routing.module";

@NgModule({
  imports: [SharedModule,EditBlogRoutingModule],
  declarations: [EditBlogComponent],
  exports:[EditBlogComponent]
})
export class EditBlogModule { }
