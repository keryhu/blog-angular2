import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdProgressBarModule,
  MdSelectModule, MdSnackBarModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CKEditorModule} from "ng2-ckeditor";

import {ReleaseTemplateComponent} from "./release-template.component";
import {ReleaseTemplateService} from "./release-template.service";
import {CanDelIconModule} from "../can-del-icon";

@NgModule({
  imports: [CommonModule,MdCardModule,MdInputModule,MdSelectModule,MdSnackBarModule,
    MdButtonModule,MdIconModule,MdProgressBarModule,ReactiveFormsModule,FormsModule,
    CKEditorModule,CanDelIconModule],
  declarations: [ReleaseTemplateComponent],
  providers:[ReleaseTemplateService],
  exports:[ReleaseTemplateComponent]
})
export class ReleaseTemplateModule { }
