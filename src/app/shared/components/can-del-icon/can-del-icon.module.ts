import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {CanDelIconComponent} from "./can-del-icon.component";

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [CanDelIconComponent],
  exports:[CanDelIconComponent]
})
export class CanDelIconModule { }
