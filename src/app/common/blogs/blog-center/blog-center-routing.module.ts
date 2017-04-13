import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BlogCenterComponent} from "./blog-center.component";
import {SpinnerGuard} from "../../../core/spinner/spinner.guard";


const blogCenterRoutes: Routes=[
  {
    path: '',
    component: BlogCenterComponent,
    canActivate:[SpinnerGuard],
    children:[
      {
        path:'',
        //component:CheckCompanyHomeComponent,
        loadChildren: 'app/common/blogs/blog-home/blog-home.module#BlogHomeModule'
      },
      {
        path:':id',
        //component:CheckCompanyHomeComponent,
        loadChildren: 'app/common/blogs/blog-detail/blog-detail.module#BlogDetailModule'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(blogCenterRoutes)],
  exports: [RouterModule]
})
export class BlogCenterRoutingModule { }
