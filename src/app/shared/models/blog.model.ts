/**
 * @Description : please enter the description
 * @date : 2017/3/25 下午5:49
 * @author : keryHu keryhu@hotmail.com
 */

//  发布博客和 从数据库取得博客，所需要的实体对象  为啥放在 shared 目录，
// 因为出了common blogs需要get，admin里面还需要 编辑保存
export class Blog{

  title:string;
  content:string;
  publishTime?:string;
}
