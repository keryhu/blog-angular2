import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";

import { TopNavbarComponent } from './top-navbar.component';
import {ToolBarModule} from "../../admins/shared/tool-bar/tool-bar.module";



@NgModule({
  imports: [CommonModule,RouterModule,MaterialModule,ToolBarModule],
  declarations: [TopNavbarComponent],
  exports:[TopNavbarComponent]
})
export class TopNavbarModule { }
