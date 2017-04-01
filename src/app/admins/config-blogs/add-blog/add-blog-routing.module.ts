import { NgModule } from '@angular/core';
import {AddBlogComponent} from "./add-blog.component";
import {RouterModule, Routes} from "@angular/router";


const addBlogRoutes:Routes=[

  {
    path: '',
    component: AddBlogComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(addBlogRoutes)],
  exports:[RouterModule]
})
export class AddBlogRoutingModule { }
