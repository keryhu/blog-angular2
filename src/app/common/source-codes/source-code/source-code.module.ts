import { NgModule } from '@angular/core';
import {MdCardModule} from "@angular/material";
import {SharedModule} from "../../../shared";


import {SourceCodeComponent} from "./source-code.component";
import {SourceCodeRoutingModule} from "./source-code-routing.module";

// 为什么需要引入 MaterialModule，因为引入的动态模版，，需要用到 MaterialModule，所以在这里需要单独引入
@NgModule({
  imports: [SharedModule,SourceCodeRoutingModule,MdCardModule],
  declarations: [SourceCodeComponent],
  exports:[SourceCodeComponent]
})
export class SourceCodeModule { }
