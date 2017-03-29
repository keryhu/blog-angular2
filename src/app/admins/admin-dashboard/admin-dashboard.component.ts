import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() {
    this.setTitle();
  }
  setTitle() {
    this.title.setTitle('树己之路-管理员首页');
  }
}
