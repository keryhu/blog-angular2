import { NgModule } from '@angular/core';

import {SharedModule} from "../../shared";
import {AboutMeComponent} from "./about-me.component";
import {AboutMeRoutingModule} from "./about-me-routing.module";

@NgModule({
  imports: [SharedModule,AboutMeRoutingModule],
  declarations: [AboutMeComponent],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
