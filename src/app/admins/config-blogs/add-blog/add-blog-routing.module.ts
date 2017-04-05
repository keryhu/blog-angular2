import { NgModule } from '@angular/core';
import {AddBlogComponent} from "./add-blog.component";
import {RouterModule, Routes} from "@angular/router";

import {SpinnerGuard} from "../../../core";


const addBlogRoutes:Routes=[

  {
    path: '',
    component: AddBlogComponent,
    canActivate: [SpinnerGuard]
  }
]


@NgModule({
  imports: [RouterModule.forChild(addBlogRoutes)],
  exports:[RouterModule]
})
export class AddBlogRoutingModule { }
