import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from "./spinner.component";
import {SpinnerGuard} from "./spinner.guard";

@NgModule({
  imports: [CommonModule],
  declarations: [SpinnerComponent],
  providers: [SpinnerGuard],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
