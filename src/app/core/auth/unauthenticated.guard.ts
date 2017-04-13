import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {adminHomeUrl} from "../index";

@Injectable()
export class UnauthenticatedGuard implements CanActivate{

  constructor(private authService:AuthService,private router:Router){}

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(!this.authService.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate([adminHomeUrl]);
    }
    return false;
  }

}
