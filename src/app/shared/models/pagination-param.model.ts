

/**
 * @Description : 此对象用在 开源代码或博客，简略标题的多页显示的component
 *  使用在 app／commont／blogs／blog，app／commont／source-codes／source-code
 * @date : 2017/4/7 上午8:26
 * @author : keryHu keryhu@hotmail.com
 */
import {Sort} from "./sort.model";

export interface PaginationParam{
  key?:string;                      //  标题\描述
  tag?:string;                      //   标签
  page?:number;                    // 第一页，为0，后面自动加1
  size?:string;
  sort?:Sort;               // 排序参数，目前只支持一个值排序，如果要多个值，这里设置数组即可
}
