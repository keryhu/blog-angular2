import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule, MdToolbarModule} from "@angular/material";
import {ToolBarComponent} from "./tool-bar.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule,MdToolbarModule,MdListModule,RouterModule],
  declarations: [ToolBarComponent],
  exports:[ToolBarComponent]
})
export class ToolBarModule { }
