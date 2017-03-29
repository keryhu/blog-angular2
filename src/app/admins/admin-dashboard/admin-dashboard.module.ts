import { NgModule } from '@angular/core';


import {SharedModule} from "../../shared";
import {AdminDashboardRoutingModule} from "./admin-dashboard-routing.module";
import {AdminDashboardComponent} from "./admin-dashboard.component";


@NgModule({
  imports: [SharedModule,AdminDashboardRoutingModule],
  declarations: [AdminDashboardComponent],
  exports:[AdminDashboardComponent]
})
export class AdminDashboardModule { }
