import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonToggleModule} from "@angular/material";
import {TagSortComponent} from "./tag-sort.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule,MdButtonToggleModule,FormsModule],
  declarations: [TagSortComponent],
  exports:[TagSortComponent]
})
export class TagSortModule { }
