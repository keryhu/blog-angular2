import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {SharedModule,TagSortModule,OptionalSortModule} from "../../../shared";

import {SimpleBlogService} from "./simple-blog.service";
import {SimpleBlogResolveService} from "./simple-blog-resolve.service";
import {BlogSimpleModule} from "../blog-simple/";
import {BlogHomeComponent} from "./blog-home.component";
import {BlogHomeRoutingModule} from "./blog-home-routing.module";
import {MdButtonModule, MdIconModule} from "@angular/material";


// 为什么需要引入 MaterialModule，因为引入的动态模版，，需要用到 MaterialModule，所以在这里需要单独引入

@NgModule({
  imports: [SharedModule,BlogHomeRoutingModule,BlogSimpleModule,
    NgbModule,TagSortModule,OptionalSortModule,MdButtonModule,MdIconModule],
  declarations: [BlogHomeComponent],
  providers:[SimpleBlogService,SimpleBlogResolveService],
  exports: [BlogHomeComponent]
})
export class BlogHomeModule { }
