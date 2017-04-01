import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared";


import {AdminHomeRoutingModule} from "./admin-home-routing.module";
import {AdminHomeComponent} from "./admin-home.component";


@NgModule({
  imports: [SharedModule,AdminHomeRoutingModule],
  declarations: [AdminHomeComponent],
  exports:[AdminHomeComponent]
})
export class AdminHomeModule { }
