/**
 * @Description : please enter the description
 * @date : 2017/3/25 上午10:19
 * @author : keryHu keryhu@hotmail.com
 */


import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
export * from './auth.service';
export * from './request.service';
export * from './auth-guard.service';
export * from './auth-profile.model';
export * from './refresh-token-rest.service';


export const AuthProviders=[
  AuthService,
  AuthGuardService
]
