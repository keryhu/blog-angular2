/**
 * @Description : please enter the description
 * @date : 2017/3/27 下午2:23
 * @author : keryHu keryhu@hotmail.com
 */

/*
 http 错误编码,指rest 请求的时候，出现的所有的提示信息，编码，
 例如login ， 用户名，密码错误，服务器返回的是 0101代码，前台需要对照 编码规则，将0101，转为 文字"用户名，密码错误"
 显示在前台页面。

这个是具体的实体对象
 */
export class ErrMsgModel{
  code='';     //编码中的码号
  value='';   //编码中对应的中文


}
