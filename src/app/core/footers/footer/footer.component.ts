import { Component, OnInit } from '@angular/core';
import {GetFriendlyLinkService} from "../get-friendly-link.service";
import {FriendlyLink} from "../../../shared";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  friendlyLinks:FriendlyLink[]=[];
  constructor(private getFlS:GetFriendlyLinkService) { }

  ngOnInit() {
    this.friendlyLinks=this.getFlS.getFriendlyLinks();
  }

}
