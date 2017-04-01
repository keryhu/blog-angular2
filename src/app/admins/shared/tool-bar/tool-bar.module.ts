import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {ToolBarComponent} from "./tool-bar.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule,MaterialModule,RouterModule],
  declarations: [ToolBarComponent],
  exports:[ToolBarComponent]
})
export class ToolBarModule { }
