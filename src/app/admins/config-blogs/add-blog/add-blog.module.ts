import { NgModule } from '@angular/core';
import {MaterialModule} from "@angular/material";

import {SharedModule,UploadFileModule,ShowUnusedImgModule} from "../../../shared";
import {AddBlogComponent} from "./add-blog.component";
import {AddBlogRoutingModule} from "./add-blog-routing.module";
import {AddBlogService} from "./add-blog.service";



@NgModule({
  imports: [SharedModule,AddBlogRoutingModule,MaterialModule,UploadFileModule,ShowUnusedImgModule],
  declarations: [AddBlogComponent],
  providers:[AddBlogService],
  exports:[AddBlogComponent]
})
export class AddBlogModule { }
