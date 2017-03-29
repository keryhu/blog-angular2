import { Injectable } from '@angular/core';
import {FriendlyLink} from "../../shared/models/friendly-link.model";

/*
  从数据库获取当前的 所有的 友情链接的 service

  因为此srvice，刷新每个页码的时候，都需要调用，当然想整个页面只需要加载一个service对象，所以
  将他放到 core module里面
 */
@Injectable()
export class GetFriendlyLinkService {


  constructor() { }

  getFriendlyLinks():FriendlyLink[]{

    return [{name:'Spring',link:'https://spring.io'}];
  }


}
