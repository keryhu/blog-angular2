import { NgModule } from '@angular/core';


import {SharedModule} from "../../shared";

import {AdminCenterRoutingModule} from "./admin-center-routing.module";
import {AdminCenterComponent} from "./admin-center.component";

import {ToolBarModule} from "../shared";


@NgModule({
  imports: [SharedModule,AdminCenterRoutingModule,ToolBarModule],
  declarations: [AdminCenterComponent],
  exports:[AdminCenterComponent]
})
export class AdminCenterModule { }
