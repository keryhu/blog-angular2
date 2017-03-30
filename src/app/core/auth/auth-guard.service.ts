import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router,
  RouterStateSnapshot
} from "@angular/router";
import {AuthService} from "./auth.service";
import {loginUrl, lsat} from "../index";

@Injectable()
export class AuthGuardService implements CanActivate ,CanActivateChild{

  constructor(private authService:AuthService,private router:Router) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }


  checkLogin(url: string): boolean {
    const token: string = localStorage.getItem(lsat);
    if(token){
      if (this.authService.isLoggedIn) { return true; }
    }
    else{
      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;

      // Navigate to the login page with extras
      this.router.navigate([loginUrl]);
      return false;
    }



  }



}
