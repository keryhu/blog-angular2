import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateParsePipe} from "./date-parse.pipe";

@NgModule({
  imports: [CommonModule,],
  declarations: [DateParsePipe],
  exports: [DateParsePipe]
})
export class DateParseModule { }
