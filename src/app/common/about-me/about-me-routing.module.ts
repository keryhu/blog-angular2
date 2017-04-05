import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AboutMeComponent} from "./about-me.component";
import {SpinnerGuard} from "../../core";


const aboutMeRoutes:Routes=[

  {
    path: '',
    component: AboutMeComponent,
    canActivate: [SpinnerGuard]

  }
]


@NgModule({
  imports: [RouterModule.forChild(aboutMeRoutes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
