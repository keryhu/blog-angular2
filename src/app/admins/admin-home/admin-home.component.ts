import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";



@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private title:Title) {
  }
  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    this.title.setTitle('树己之路-管理员首页');
  }


}
