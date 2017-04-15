import { NgModule } from '@angular/core';

import {SharedModule,CommentDisplayModule} from "../../../shared";
import {BlogDetailComponent} from "./blog-detail.component";
import {BlogDetailRoutingModule} from "./blog-detail-routing.module";
import {DetailBlogResolveService} from "./detail-blog-resolve.service";
import {BlogCommentModule} from "../blog-comment";
import {BlogDetailService} from "./blog-detail.service";

@NgModule({
  imports: [SharedModule,BlogDetailRoutingModule,BlogCommentModule,
  CommentDisplayModule],
  declarations: [BlogDetailComponent],
  providers:[DetailBlogResolveService,BlogDetailService],
  exports:[BlogDetailComponent]
})
export class BlogDetailModule { }
