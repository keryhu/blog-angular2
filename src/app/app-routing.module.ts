
/**
 * @Description : please enter the description
 * @date : 2017/3/24 下午2:11
 * @author : keryHu keryhu@hotmail.com
 */


import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {HomeComponent} from "./common";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";



const routes: Routes = [
  { path: '',  component:HomeComponent },
  { path: 'blog',loadChildren:'app/common/blogs/blog/blog.module#BlogModule' },
  {path:'login',loadChildren:'app/common/login/login.module#LoginModule'},
  {path:'source-code',loadChildren:'app/common/source-codes/source-code/source-code.module#SourceCodeModule'},
  {path:'about-me',loadChildren:'app/common/about-me/about-me.module#AboutMeModule'},
  {path:'leave-message',loadChildren:'app/common/leave-messages/leave-message/leave-message.module#LeaveMessageModule'},
  {path:'admin',loadChildren:'app/admins/admin-center/admin-center.module#AdminCenterModule'},
  { path: '**',component:PageNotFoundComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
