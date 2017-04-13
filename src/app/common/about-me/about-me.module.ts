import { NgModule } from '@angular/core';

import {SharedModule,CanDelIconModule} from "../../shared";
import {AboutMeComponent} from "./about-me.component";
import {AboutMeRoutingModule} from "./about-me-routing.module";

@NgModule({
  imports: [SharedModule,AboutMeRoutingModule,CanDelIconModule],
  declarations: [AboutMeComponent],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
