import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LeaveMessageComponent} from "./leave-message.component";


const leaveMessageRoutes:Routes=[
  {
    path: '',
    component: LeaveMessageComponent
    /*
     canActivate: [UnauthenticatedGuard,SpinnerGuard],
     resolve: {
     block: IpBlockResolve
     },
     */
  }
]


@NgModule({
  imports: [RouterModule.forChild(leaveMessageRoutes)],
  exports: [RouterModule]
})
export class LeaveMessageRoutingModule { }
