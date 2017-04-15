import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCardModule, MdProgressSpinnerModule, MdSnackBarModule} from "@angular/material";

import {UploadFileComponent} from "./upload-file.component";
import {UploadFileService} from "./upload-file.service";
import {ImgResizeService} from "./img-resize.service";
import {DataURItoFileService} from "./data-urito-file.service";

@NgModule({
  imports: [CommonModule,MdCardModule,MdButtonModule,MdProgressSpinnerModule,
    MdSnackBarModule],
  declarations: [UploadFileComponent],
  providers: [UploadFileService,ImgResizeService,DataURItoFileService],
  exports:[UploadFileComponent]
})
export class UploadFileModule { }
