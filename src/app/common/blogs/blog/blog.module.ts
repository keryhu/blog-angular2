import { NgModule } from '@angular/core';
import {MaterialModule} from "@angular/material";

import {SharedModule} from "../../../shared";

import { BlogComponent} from "./blog.component";
import {BlogRoutingModule} from "./blog-routing.module";
import {BlogTemplateModule} from "../blog-template/blog-template.module";

// 为什么需要引入 MaterialModule，因为引入的动态模版，，需要用到 MaterialModule，所以在这里需要单独引入

@NgModule({
  imports: [SharedModule,BlogRoutingModule,MaterialModule,BlogTemplateModule],
  declarations: [BlogComponent],
  exports: [BlogComponent]
})
export class BlogModule { }
