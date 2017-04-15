import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MaterialModule, MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
  MdSnackBarModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

import {AddTagComponent} from "./add-tag.component";
import {AddTagService} from "./add-tag.service";


@NgModule({
  imports: [CommonModule,MdCardModule,MdButtonModule,MdInputModule,MdSnackBarModule,
    MdIconModule, ReactiveFormsModule],
  declarations: [AddTagComponent],
  providers:[AddTagService],
  exports:[AddTagComponent]
})
export class AddTagModule { }
