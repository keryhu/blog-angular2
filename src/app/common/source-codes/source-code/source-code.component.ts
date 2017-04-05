import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

import {SpinnerService} from "../../../core";


@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.css']
})
export class SourceCodeComponent implements OnInit {

  constructor(private title:Title,private spinner: SpinnerService) { }

  ngOnInit() {
    this.setTitle();

    this.spinner.stop();

  }

  setTitle() {
    this.title.setTitle('树己之路-开源');
  }


}
