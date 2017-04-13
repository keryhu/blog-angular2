import { NgModule } from '@angular/core';
 import {BlogCenterRoutingModule} from "./blog-center-routing.module";
import {SharedModule} from "../../../shared";
import {BlogCenterComponent} from "./blog-center.component";

@NgModule({
  imports: [SharedModule,BlogCenterRoutingModule],
  declarations: [BlogCenterComponent],
  exports:[BlogCenterComponent]
})
export class BlogCenterModule { }
