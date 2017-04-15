import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdSelectModule,
  MdSnackBarModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {EditTagComponent} from "./edit-tag.component";
import {EditTagService} from "./edit-tag.service";

@NgModule({
  imports: [CommonModule,MdCardModule,MdSelectModule,MdInputModule,MdSnackBarModule,
    MdButtonModule,MdIconModule,ReactiveFormsModule],
  declarations: [EditTagComponent],
  providers:[EditTagService],
  exports:[EditTagComponent]
})
export class EditTagModule { }
