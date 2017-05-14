import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminHomeComponent} from "./admin-home.component";


const adminHomeRoutes:Routes=[

  {
    path: '',
    component: AdminHomeComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(adminHomeRoutes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
