import { NgModule } from '@angular/core';
import {BaiduGoogleAdComponent} from "./baidu-google-ad.component";
import {CommonModule} from "@angular/common";
import { MdCardModule} from "@angular/material";

// 因为这个是 单独的组建，所以，不能使用 SharedMOdule
@NgModule({
  imports: [CommonModule,MdCardModule],
  declarations: [BaiduGoogleAdComponent],
  exports:[BaiduGoogleAdComponent]
})
export class BaiduGoogleAdModule { }
