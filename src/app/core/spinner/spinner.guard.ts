import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {SpinnerService} from "./spinner.service";

@Injectable()
export class SpinnerGuard  implements CanActivate {


  constructor(private spinnerService:SpinnerService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.spinnerService.start();
    return true;
  }

}

