/**
 * @Description : please enter the description
 * @date : 2017/3/29 下午7:02
 * @author : keryHu keryhu@hotmail.com
 */


// 用在用户登录后，保存在localStorage里面，用户的信息，保护userId，loginName，，和refreshToken过期时间
export class AuthProfile{
  loginName='';
  refreshToken_expires_in=0;
}
