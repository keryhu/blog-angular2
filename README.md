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


   
 # 关于发表博客或者开源代码，里面保护图片的实现方法
 
  前提都是预先将图片处理好，存到到服务器 
  www.keryhu.com/images文件下，其中子路径blog
  和source-ode，分别代表两个地方的路径
  
  其中图片的文件名，按照年月日加2位顺序编码，
  例如2017040101.png
  ----
  接着在富文本中引用此图片，
  
  问题： 如何上传图片到服务器地址，有2个方法
  1  自己实现一个上传图片的方法，
  2  自己手工scp上传图片到 服务器
   
