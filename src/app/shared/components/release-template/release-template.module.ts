import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CKEditorModule} from "ng2-ckeditor";

import {ReleaseTemplateComponent} from "./release-template.component";
import {ReleaseTemplateService} from "./release-template.service";
import {CanDelIconModule} from "../can-del-icon";

@NgModule({
  imports: [CommonModule,MaterialModule,ReactiveFormsModule,FormsModule,
    CKEditorModule,CanDelIconModule],
  declarations: [ReleaseTemplateComponent],
  providers:[ReleaseTemplateService],
  exports:[ReleaseTemplateComponent]
})
export class ReleaseTemplateModule { }
