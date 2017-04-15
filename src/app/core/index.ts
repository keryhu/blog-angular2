/**
 * @Description : please enter the description
 * @date : 2017/3/24 下午12:40
 * @author : keryHu keryhu@hotmail.com
 */



export * from './core.module';
export * from './top-navbar';
export * from './footers';
export * from './auth';
export * from './util';
export * from './spinner';


/*
 平台所有的常量
 */

// 常用的url
export const blogUrl='/blog';
export const aboutMeUrl='/about-me';
export const sourceCodeUrl='/source-code';
export const leaveMessageUrl='/leave-message';
export const loginUrl='/login';

export const adminHomeUrl='/admin';
export const addBlogUrl='/admin/add-blog';
export const editBlogUrl='/admin/edit-blog';
export const addSourceCode='/admin/add-source-code';
export const editSourceCode='/admin/edit-source-code';
export const configTag='/admin/config-tag';


export const refreshTokenSaveUrl:string='/api/storeRefreshToken';
export const refreshTokenGetUrl:string='/api/getRefreshToken';
export const authUrl: string='/uaa/oauth/token';


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


//    tag
export const addTagUrl='/api/tag/tags/create';
export const delTagUrl='/api/tag/tags/del';
export const findAllTagsUrl='/api/tag/tags/findAll';
export const updateTagUrl='/api/tag/tags/update';

//    blog
export const blogImageUploadUrl='/api/blog-server/blog/upload-image';
export const getBlogUnusedImgUrl='/api/blog-server/blog/getUnusedImgUrl';
export const rmUnusedImgUrl='/api/blog-server/blog/rm-unused-img';

export const publishBlogUrl='/api/blog-server/blog/publishBlog';
export const simpleBlogUrl='/api/blog-server/blog/find-simple-blogs';
export const detailBlogUrl='/api/blog-server/blog/individual';  //后面加blogId

export const serverUpdateBlogUrl='/api/blog-server/blog/update';
export const serverDelBlogUrl='/api/blog-server/blog/del';
//  删除某个具体博客下面的 具体的评论。
export const delCommentUrl='/api/blog-server//blog/delOnlyComment';

// blog comment
export const newBlogCommentUrl='/api/comment/free/create';



//--------------错误代码的编号---------
export const tagNameHasExist='1001';
// 当用户输入错误的的blogId，不能正常显示详细的blog页码的时候，错误代码
export const invalidBlogId='1020';


//
export const supportImgType=['jpg','jpeg','png'];
export const uploadErrMsg="图片格式必需为'jpg','jpeg','png'";
export const imgMaxSize=4 * 1024 * 1024;  //最大4Mb的图片
export const imgResizeMinSize=200 * 1024;  //resize 处理的，最小的文件大小、
export const imgAcceptType='image/*';
//图片需要resize 后的像素，宽度，高度。
export const imgResizeDimension={
  width: 200,
  height: 250
};
export const blogImgUploadRequestPart='blogImage';


