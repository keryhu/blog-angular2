import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import {SourceCodeComponent} from "./source-code.component";



const sourceCodeRoutes:Routes=[
  {
    path: '',
    component: SourceCodeComponent
    /*
     canActivate: [UnauthenticatedGuard,SpinnerGuard],
     resolve: {
     block: IpBlockResolve
     },
     */
  }
]



@NgModule({
  imports: [RouterModule.forChild(sourceCodeRoutes)],
  exports: [RouterModule]
})
export class SourceCodeRoutingModule { }
