import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdSelectModule} from "@angular/material";
import {OptionalSortComponent} from "./optional-sort.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule,MdSelectModule,ReactiveFormsModule],
  declarations: [OptionalSortComponent],
  exports:[OptionalSortComponent]
})
export class OptionalSortModule { }
