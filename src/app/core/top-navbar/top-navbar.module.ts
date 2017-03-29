import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";

import { TopNavbarComponent } from './top-navbar.component';



@NgModule({
  imports: [CommonModule,RouterModule,MaterialModule],
  declarations: [TopNavbarComponent],
  exports:[TopNavbarComponent]
})
export class TopNavbarModule { }
