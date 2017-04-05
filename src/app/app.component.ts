import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpinnerService} from "./core/spinner/spinner.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  private spinnersub: Subscription;
  public active: boolean;

  ngOnInit(): void {
    this.spinnersub = this.spinner.status.subscribe((status: boolean) => {
      this.active = status;
    });

  }


  constructor(private spinner: SpinnerService){}

  ngOnDestroy(): void {
    if (typeof this.spinnersub !== 'undefined') {
      this.spinnersub.unsubscribe();
    }
  }

}
