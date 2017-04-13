import { NgModule } from '@angular/core';
import {AddBlogComponent} from "./add-blog.component";
import {RouterModule, Routes} from "@angular/router";

import {SpinnerGuard,AllTagsResolver} from "../../../core";


const addBlogRoutes:Routes=[

  {
    path: '',
    component: AddBlogComponent,
    canActivate: [SpinnerGuard],
    resolve:{tags: AllTagsResolver}
  }
];


@NgModule({
  imports: [RouterModule.forChild(addBlogRoutes)],
  exports:[RouterModule]
})
export class AddBlogRoutingModule { }
