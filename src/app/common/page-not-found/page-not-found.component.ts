import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Title} from "@angular/platform-browser";
import {SpinnerService} from "../../core/spinner/spinner.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {


  constructor(private _location: Location,private title:Title,private spinner: SpinnerService) { }

  ngOnInit() {
    this.setTitle();
    this.spinner.stop();
  }

  setTitle() {
    this.title.setTitle('树己之路-404');
  }

  goBack(){
    this._location.back();
  }
}
