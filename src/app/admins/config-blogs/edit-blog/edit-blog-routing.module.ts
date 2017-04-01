import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {EditBlogComponent} from "./edit-blog.component";




const editBlogRoutes:Routes=[

  {
    path: '',
    component: EditBlogComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(editBlogRoutes)],
  exports:[RouterModule]
})
export class EditBlogRoutingModule { }
