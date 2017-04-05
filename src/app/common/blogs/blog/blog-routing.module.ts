import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./blog.component";
import {SpinnerGuard} from "../../../core";

const blogRoutes:Routes=[
  {
    path: '',
    component: BlogComponent,
    canActivate: [SpinnerGuard]
    /*
     canActivate: [UnauthenticatedGuard,SpinnerGuard],
     resolve: {
     block: IpBlockResolve
     },
     */
  }
]
@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
