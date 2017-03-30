import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {AuthGuardService} from "../../core";



const adminDashboardRoutes:Routes=[

  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [AuthGuardService],
  }
]

@NgModule({
  imports: [RouterModule.forChild(adminDashboardRoutes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }


