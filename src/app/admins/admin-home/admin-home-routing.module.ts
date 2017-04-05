import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminHomeComponent} from "./admin-home.component";
import {SpinnerGuard} from "../../core";


const adminHomeRoutes:Routes=[

  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [SpinnerGuard]
  }
]



@NgModule({
  imports: [RouterModule.forChild(adminHomeRoutes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
