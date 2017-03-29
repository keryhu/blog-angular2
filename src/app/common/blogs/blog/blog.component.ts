import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {GetBlogFromDbService} from "../get-blog-from-db.service";




@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  content=`<h1>h1 content h1 </h1>`;

  constructor(private title:Title,private getBlogsService:GetBlogFromDbService) { }


  ngOnInit() {
    this.setTitle();
  }

   setTitle() {
    this.title.setTitle('树己之路-博客');
  }

}
