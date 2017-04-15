import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCardModule, MdIconModule, MdSelectModule, MdSnackBarModule} from "@angular/material";
import { ReactiveFormsModule} from "@angular/forms";
import {DelTagComponent} from "./del-tag.component";
import {DelTagService} from "./del-tag.service";

@NgModule({
  imports: [CommonModule,MdCardModule,MdSelectModule,MdButtonModule,MdSnackBarModule,
    MdIconModule, ReactiveFormsModule],
  declarations: [DelTagComponent],
  providers:[DelTagService],
  exports:[DelTagComponent]
})
export class DelTagModule { }
