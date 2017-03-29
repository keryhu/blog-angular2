/**
 * @Description : please enter the description
 * @date : 2017/3/24 下午12:40
 * @author : keryHu keryhu@hotmail.com
 */



export * from './core.module';
export * from './top-navbar';
export * from './footers';
export * from './auth';
export * from './err-msg';


/*
 平台所有的常量
 */

// 常用的url
export const blogUrl='/blog';
export const aboutMeUrl='/about-me';
export const sourceCodeUrl='/source-code';
export const leaveMessageUrl='/leave-message';
export const loginUrl='/login';

export const refreshTokenSaveUrl:string='/api/storeRefreshToken';
export const refreshTokenGetUrl:string='/api/getRefreshToken';
export const authUrl: string=`http://localhost:9999/uaa/oauth/token`;


//  http client from  server url


// auth

   // 存储在localStorage里面的accessToken 的名字
export const lsat='access_token';
export const clientId='ksdx892koURsdMN';
export const clientSecret='sdkxm72k3x09sdsd';
//refreshToken 过期时间   单位为 秒   10 days
export const refreshToken_expired_in:number=864000;
//最小的刷新access-token的剩余时间, 单位为m,设置这个时间⚠️目的是: 提交更新access-token,还有当浏览器刷新的时候,
//如果发现剩余时间小于这个数字的时候,自动更新access-token
export const minLeftRefreshTokenSeconds:number=35;
//access-token 过期时间为 5分钟
export const accessTokenValiditySeconds:number=300;


