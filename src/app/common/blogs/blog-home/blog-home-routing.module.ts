import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AllTagsResolver} from "../../../core";
import {SimpleBlogResolveService} from "./simple-blog-resolve.service";
import {BlogHomeComponent} from "./blog-home.component";

const blogHomeRoutes: Routes = [
  {
    path: '',
    component: BlogHomeComponent,
    resolve: {
      simpleBlog: SimpleBlogResolveService,
      tags: AllTagsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(blogHomeRoutes)],
  exports: [RouterModule]
})
export class BlogHomeRoutingModule {
}
