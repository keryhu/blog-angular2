import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";




@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.css']
})
export class LeaveMessageComponent implements OnInit {

  constructor(private title:Title) { }


  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    this.title.setTitle('树己之路-留言');
  }

}
