import { NgModule } from '@angular/core';
import {FooterComponent} from "./footer.component";
import {MaterialModule} from "@angular/material";
import {GetFriendlyLinkService} from "../get-friendly-link.service";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [FooterComponent],
 // providers:[GetFriendlyLinkService],
  exports: [FooterComponent]
})
export class FooterModule { }
