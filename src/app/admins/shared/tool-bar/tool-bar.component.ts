import { Component, OnInit } from '@angular/core';
import {
  addBlogUrl, addSourceCode, adminHomeUrl, configTag, editBlogUrl,
  editSourceCode
} from "../../../core";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  private adminUrl=adminHomeUrl;
  private addBlogUrl=addBlogUrl;
  private editBlogUrl=editBlogUrl;
  private addSourceCode=addSourceCode;
  private editSourceCode=editSourceCode;
  private configTag=configTag;
  constructor() { }

  ngOnInit() {
  }

}
