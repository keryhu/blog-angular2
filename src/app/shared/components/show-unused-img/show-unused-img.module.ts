import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";

import {ShowUnusedImgComponent} from "./show-unused-img.component";
import {ShowUnusedImgService} from "./show-unused-img.service";
import {UploadFileModule} from "../upload-file";


@NgModule({
  imports: [CommonModule,MaterialModule,UploadFileModule],
  declarations: [ShowUnusedImgComponent],
  providers:[ShowUnusedImgService],
  exports:[ShowUnusedImgComponent]
})
export class ShowUnusedImgModule { }
