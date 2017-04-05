import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";


import {SpinnerService} from "../../../core";


/*

 */
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {


  constructor(private title:Title,private spinner: SpinnerService) { }

  ngOnInit() {
    this.spinner.stop();
    this.setTitle();
  }

  setTitle() {
    this.title.setTitle('树己之路-编辑博客');
  }


}
