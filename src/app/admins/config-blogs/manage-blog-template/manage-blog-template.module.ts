import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MdButtonModule, MdCardModule} from "@angular/material";

import {ManageBlogTemplateComponent} from "./manage-blog-template.component";
import {ReleaseTemplateModule, ShowUnusedImgModule} from "../../../shared";


@NgModule({
  imports: [CommonModule, MdCardModule,MdButtonModule,
    ShowUnusedImgModule, ReleaseTemplateModule],
  declarations: [ManageBlogTemplateComponent],
  exports: [ManageBlogTemplateComponent]
})
export class ManageBlogTemplateModule {
}
