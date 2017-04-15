import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCardModule, MdInputModule, MdProgressBarModule, MdSnackBarModule} from "@angular/material";
import {BlogCommentComponent} from "./blog-comment.component";
import {BlogCommentService} from "./blog-comment.service";
import {CKEditorModule} from "ng2-ckeditor";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule,MdCardModule,MdInputModule,MdButtonModule,MdProgressBarModule,
    MdSnackBarModule,CKEditorModule,ReactiveFormsModule],
  declarations: [BlogCommentComponent],
  providers:[BlogCommentService],
  exports:[BlogCommentComponent]

})
export class BlogCommentModule { }
