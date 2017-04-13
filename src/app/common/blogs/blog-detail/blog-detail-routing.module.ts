import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import {SpinnerGuard} from "../../../core";
import {BlogDetailComponent} from "./blog-detail.component";
import {DetailBlogResolveService} from "./detail-blog-resolve.service";



const blogDetailRoutes: Routes=[
  {
    path: '',
    component: BlogDetailComponent,
    canActivate:[SpinnerGuard],
    resolve:{
      detailBlog:DetailBlogResolveService
    }

  }
];



@NgModule({
  imports: [RouterModule.forChild(blogDetailRoutes)],
  exports: [RouterModule]
})
export class BlogDetailRoutingModule { }
