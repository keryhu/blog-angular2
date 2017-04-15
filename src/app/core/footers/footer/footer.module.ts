import { NgModule } from '@angular/core';
import {FooterComponent} from "./footer.component";
import { MdCardModule} from "@angular/material";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule,MdCardModule],
  declarations: [FooterComponent],
 // providers:[GetFriendlyLinkService],
  exports: [FooterComponent]
})
export class FooterModule { }
