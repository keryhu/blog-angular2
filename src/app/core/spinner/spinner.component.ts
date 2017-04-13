import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SpinnerService} from "./spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit,OnDestroy {

  private spinnersub: Subscription;
  public active: boolean;

  public constructor(private spinner: SpinnerService) {

  }

  ngOnInit(): void {

    this.spinnersub =this.spinner.status.subscribe((status: boolean) => {
      this.active = status;
    });
  }


  ngOnDestroy(): void {

    if(typeof this.spinnersub!=='undefined'){
      this.spinnersub.unsubscribe();
    }
  }

}
