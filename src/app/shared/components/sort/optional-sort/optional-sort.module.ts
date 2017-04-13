import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {OptionalSortComponent} from "./optional-sort.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule,MaterialModule,ReactiveFormsModule],
  declarations: [OptionalSortComponent],
  exports:[OptionalSortComponent]
})
export class OptionalSortModule { }
