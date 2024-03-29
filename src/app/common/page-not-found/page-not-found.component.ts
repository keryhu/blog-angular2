import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {


  constructor(private _location: Location,private title:Title) { }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    this.title.setTitle('树己之路-404');
  }

  goBack(){
    this._location.back();
  }
}
