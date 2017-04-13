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

  // 这里的都要打开为public，因为toolBarComponent被admin外面的访问


  public adminUrl=adminHomeUrl;
  public addBlogUrl=addBlogUrl;
  public editBlogUrl=editBlogUrl;
  public addSourceCode=addSourceCode;
  public editSourceCode=editSourceCode;
  public configTag=configTag;
  constructor() { }

  ngOnInit() {
  }

}
