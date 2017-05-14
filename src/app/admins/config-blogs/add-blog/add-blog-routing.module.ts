import { NgModule } from '@angular/core';
import {AddBlogComponent} from "./add-blog.component";
import {RouterModule, Routes} from "@angular/router";

import {AllTagsResolver} from "../../../core";


const addBlogRoutes:Routes=[

  {
    path: '',
    component: AddBlogComponent,
    resolve:{tags: AllTagsResolver}
  }
];


@NgModule({
  imports: [RouterModule.forChild(addBlogRoutes)],
  exports:[RouterModule]
})
export class AddBlogRoutingModule { }
