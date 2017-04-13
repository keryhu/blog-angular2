import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {CommentDisplayComponent} from "./comment-display.component";
import {DateParseModule} from "../../pipe";
import {CommentDisplayService} from "./comment-display.service";

@NgModule({
  imports: [CommonModule,MaterialModule,DateParseModule],
  declarations: [CommentDisplayComponent],
  providers:[CommentDisplayService],
  exports:[CommentDisplayComponent]
})
export class CommentDisplayModule { }
