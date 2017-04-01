import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {TagCenterComponent} from "./tag-center.component";
import {AllTagsResolver} from "../../../core";


const tagCenterRoutes:Routes=[

  {
    path: '',
    component: TagCenterComponent,
    resolve:{tags: AllTagsResolver}
  }
];



@NgModule({
  imports: [RouterModule.forChild(tagCenterRoutes)],
  exports: [RouterModule]
})
export class TagCenterRoutingModule { }
