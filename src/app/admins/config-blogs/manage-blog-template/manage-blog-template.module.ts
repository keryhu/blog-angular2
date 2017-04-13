import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";

import {ManageBlogTemplateComponent} from "./manage-blog-template.component";
import {ReleaseTemplateModule, ShowUnusedImgModule} from "../../../shared";


@NgModule({
  imports: [CommonModule, MaterialModule,
    ShowUnusedImgModule, ReleaseTemplateModule],
  declarations: [ManageBlogTemplateComponent],
  exports: [ManageBlogTemplateComponent]
})
export class ManageBlogTemplateModule {
}
