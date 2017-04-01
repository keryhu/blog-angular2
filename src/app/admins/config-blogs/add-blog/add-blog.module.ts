import { NgModule } from '@angular/core';
import {MaterialModule} from "@angular/material";

import {SharedModule} from "../../../shared";
import {AddBlogComponent} from "./add-blog.component";
import {AddBlogRoutingModule} from "./add-blog-routing.module";



@NgModule({
  imports: [SharedModule,AddBlogRoutingModule,MaterialModule],
  declarations: [AddBlogComponent],
  exports:[AddBlogComponent]
})
export class AddBlogModule { }
