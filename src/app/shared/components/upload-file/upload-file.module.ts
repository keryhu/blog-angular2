import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";

import {UploadFileComponent} from "./upload-file.component";
import {UploadFileService} from "./upload-file.service";
import {ImgResizeService} from "./img-resize.service";
import {DataURItoFileService} from "./data-urito-file.service";

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [UploadFileComponent],
  providers: [UploadFileService,ImgResizeService,DataURItoFileService],
  exports:[UploadFileComponent]
})
export class UploadFileModule { }
