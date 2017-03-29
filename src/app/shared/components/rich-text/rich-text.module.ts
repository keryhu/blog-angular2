import { NgModule } from '@angular/core';
import {RichTextComponent} from "./rich-text.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [RichTextComponent],
  exports: [RichTextComponent]
})
export class RichTextModule { }
