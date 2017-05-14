import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BlogCenterComponent} from "./blog-center.component";


const blogCenterRoutes: Routes=[
  {
    path: '',
    component: BlogCenterComponent,
    //canActivate:[SpinnerGuard],
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
