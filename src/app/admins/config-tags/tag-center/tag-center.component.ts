import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tag-center',
  templateUrl: './tag-center.component.html',
  styleUrls: ['./tag-center.component.css']
})
export class TagCenterComponent implements OnInit {

  public allTags=[];

  constructor(private title:Title,private route: ActivatedRoute) { }

  ngOnInit() {
    this.setTitle();
    this.allTags=this.route.snapshot.data['tags'];
  }

  setTitle() {
    this.title.setTitle('树己之路-编辑标签');
  }



}
