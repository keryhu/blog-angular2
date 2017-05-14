import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AboutMeComponent} from "./about-me.component";


const aboutMeRoutes:Routes=[

  {
    path: '',
    component: AboutMeComponent

  }
]


@NgModule({
  imports: [RouterModule.forChild(aboutMeRoutes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
