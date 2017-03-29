import { NgModule } from '@angular/core';

import {SharedModule} from "../../../shared";

import {LeaveMessageRoutingModule} from "./leave-message-routing.module";
import {LeaveMessageComponent} from "./leave-message.component";


@NgModule({
  imports: [SharedModule,LeaveMessageRoutingModule],
  declarations: [LeaveMessageComponent],
  exports:[LeaveMessageComponent]
})
export class LeaveMessageModule { }
