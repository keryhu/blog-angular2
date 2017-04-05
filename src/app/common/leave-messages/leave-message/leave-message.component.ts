import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SpinnerService} from "../../../core";




@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.css']
})
export class LeaveMessageComponent implements OnInit {

  constructor(private title:Title,private spinner: SpinnerService) { }


  ngOnInit() {
    this.setTitle();
    this.spinner.stop();
  }

  setTitle() {
    this.title.setTitle('树己之路-留言');
  }

}
