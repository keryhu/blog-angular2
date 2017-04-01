import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

import {AddTagComponent} from "./add-tag.component";
import {AddTagService} from "./add-tag.service";


@NgModule({
  imports: [CommonModule,MaterialModule,ReactiveFormsModule],
  declarations: [AddTagComponent],
  providers:[AddTagService],
  exports:[AddTagComponent]
})
export class AddTagModule { }
