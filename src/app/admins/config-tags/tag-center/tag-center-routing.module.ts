import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {TagCenterComponent} from "./tag-center.component";
import {AllTagsResolver,SpinnerGuard} from "../../../core";


const tagCenterRoutes:Routes=[

  {
    path: '',
    component: TagCenterComponent,
    canActivate: [SpinnerGuard],
    resolve:{tags: AllTagsResolver}
  }
];



@NgModule({
  imports: [RouterModule.forChild(tagCenterRoutes)],
  exports: [RouterModule]
})
export class TagCenterRoutingModule { }
