import { NgModule } from '@angular/core';


import {SharedModule} from "../../shared";

import {AdminCenterRoutingModule} from "./admin-center-routing.module";
import {AdminCenterComponent} from "./admin-center.component";



@NgModule({
  imports: [SharedModule,AdminCenterRoutingModule],
  declarations: [AdminCenterComponent],
  exports:[AdminCenterComponent]
})
export class AdminCenterModule { }
