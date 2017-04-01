import { NgModule } from '@angular/core';

import {SharedModule} from "../../../shared";

import {TagCenterComponent} from "./tag-center.component";
import {TagCenterRoutingModule} from "./tag-center-routing.module";
import {AddTagModule} from "../add-tag";
import {DelTagModule} from "../del-tag";
import {EditTagModule} from "../edit-tag";



@NgModule({
  imports: [SharedModule,TagCenterRoutingModule,AddTagModule,DelTagModule,EditTagModule],
  declarations: [TagCenterComponent],
  exports:[TagCenterComponent]
})
export class TagCenterModule { }
