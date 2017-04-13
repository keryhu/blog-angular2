import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {EditBlogComponent} from "./edit-blog.component";
import {SpinnerGuard,AllTagsResolver} from "../../../core";
import {EditBlogResolveService} from "./edit-blog-resolve.service";




const editBlogRoutes:Routes=[

  {
    path: '',
    component: EditBlogComponent,
    canActivate: [SpinnerGuard],
    resolve:{
      editBlog:EditBlogResolveService,
      tags: AllTagsResolver
    }
  }
]


@NgModule({
  imports: [RouterModule.forChild(editBlogRoutes)],
  exports:[RouterModule]
})
export class EditBlogRoutingModule { }
