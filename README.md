# Blog

文件夹结构

 admin 存放管理员路径下的所有
 
 common 存放home路径，login路径，404路径
      就是所有首页可以导航到的 路径
      例如：开源，博客，关于我等
      
 core  是存放系统启动 所需要的service还有 局部component
      例如头部导航，页脚，spiinner等
      
      collecting numerous, auxiliary, single-use 
      classes inside a core module to simplify 
      the apparent structure of a feature module
      
 shared  是存放非系统启动需要的局部component，
     还有service（非admin）

关于ckeditor 文件上传实现
（出了管理员，图片上传功能隐藏）

  前台提交  含有html 的代码和 已经上传到
   服务器的 图片（暂时保存缓存）
   
   等待用户点击发送的时候，才保存富文本和图片
   
   保存富文本和图片的编号，注意有多个 图片的问题
   
   前台显示的时候，读取博客，通过博客id读取富文本
   和图片，后台将图片转为二进制，放在对应的src后面
   
   前台get，然后 通过innerHtml给前台。
   
