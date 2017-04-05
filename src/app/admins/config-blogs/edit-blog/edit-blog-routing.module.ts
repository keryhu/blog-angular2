import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {EditBlogComponent} from "./edit-blog.component";
import {SpinnerGuard} from "../../../core";




const editBlogRoutes:Routes=[

  {
    path: '',
    component: EditBlogComponent,
    canActivate: [SpinnerGuard]
  }
]


@NgModule({
  imports: [RouterModule.forChild(editBlogRoutes)],
  exports:[RouterModule]
})
export class EditBlogRoutingModule { }
