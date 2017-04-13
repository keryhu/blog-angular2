import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {TagSortComponent} from "./tag-sort.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule,MaterialModule,FormsModule],
  declarations: [TagSortComponent],
  exports:[TagSortComponent]
})
export class TagSortModule { }
