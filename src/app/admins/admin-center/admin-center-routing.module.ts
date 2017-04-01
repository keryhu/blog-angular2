import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AuthGuardService} from "../../core";
import {AdminCenterComponent} from "./admin-center.component";



const adminCenterRoutes:Routes=[

  {
    path: '',
    component: AdminCenterComponent,
    canActivate: [AuthGuardService],
    children:[
      {
        path: '',
        loadChildren: 'app/admins/admin-home/admin-home.module#AdminHomeModule'
      },
      {
        path: 'add-blog',
        loadChildren: 'app/admins/config-blogs/add-blog/add-blog.module#AddBlogModule'
      },
      {
        path: 'edit-blog',
        loadChildren: 'app/admins/config-blogs/edit-blog/edit-blog.module#EditBlogModule'
      },
      {
        path:'config-tag',
        loadChildren: 'app/admins/config-tags/tag-center/tag-center.module#TagCenterModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminCenterRoutes)],
  exports: [RouterModule]
})
export class AdminCenterRoutingModule { }


