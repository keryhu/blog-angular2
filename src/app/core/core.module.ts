import {NgModule, SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MdButtonModule, MdCardModule, MdToolbarModule} from "@angular/material";

import {TopNavbarModule} from "./top-navbar";
import {FooterModule,GetFriendlyLinkService} from "./footers";
import {BaiduGoogleAdModule} from "../shared";
import {RequestService, RefreshTokenRestService, AuthProviders} from "./auth";
import {AllTagsResolver} from "./util";





// from "/auth/auth-guard.service" 不能写成 "../auth" 要不然会出现 依赖循环的错误



/**
 * collecting numerous, auxiliary, single-use classes inside
 * a core module to simplify the apparent structure of a feature module
 *
 * 在核心模块内收集大量的、辅助的、单用的类以简化特征模块的表观结构
 * 系统启动时候，需要的单个对象的  例如  loggedService，授权service
 *
 * CoreModule will contain singleton services. When a lazy
 * loaded module imports these, it will get a new instance and not the intended app-wide singleton.
 *
 * e.g. NavComponent and SpinnerComponent
 */
@NgModule({
  imports: [CommonModule,FormsModule,TopNavbarModule,FooterModule,FlexLayoutModule,
    BaiduGoogleAdModule ,MdCardModule,MdToolbarModule,MdButtonModule],
  declarations: [],
  providers:[GetFriendlyLinkService,RequestService, AuthProviders,
    RefreshTokenRestService,AllTagsResolver],
  exports:[CommonModule,FormsModule,TopNavbarModule,FooterModule,FlexLayoutModule,BaiduGoogleAdModule
    ,MdCardModule,MdToolbarModule,MdButtonModule
    ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
