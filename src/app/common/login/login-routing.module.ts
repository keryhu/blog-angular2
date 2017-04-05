import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {RouterModule, Routes} from "@angular/router";
import {SpinnerGuard,UnauthenticatedGuard} from "../../core";


const loginRoutes:Routes=[
  {
    path: '',
    component: LoginComponent,
    canActivate: [SpinnerGuard,UnauthenticatedGuard],
    /*
     canActivate: [UnauthenticatedGuard,SpinnerGuard],
     resolve: {
     block: IpBlockResolve
     },
     */
  }
]

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
