<template>
<div class="home-page">
<m-navbar>
  <m-nav>
    <m-nav-item active><a href="https://www.lanyueos.com" target="_blank">主页</a></m-nav-item>
    <m-nav-item><a href="https://blog.lanyueos.com" target="_blank">博客</a></m-nav-item>
    <m-nav-item><a href="https://www.lanyueos.com" target="_blank">关于</a></m-nav-item>
  </m-nav>
  <m-nav float="right">
    <m-nav-item>
      <a href="https://github.com/mengdu/vue-electron-chrome" target="_blank"><i class="fa fa-github" style="font-size: 26px;vertical-align: middle;"></i>&nbsp;Github</a>
    </m-nav-item>
  </m-nav>
</m-navbar>

<div class="app-info">
  <div class="app-box">
    <img src="../assets/logo.png" alt="">
    <h1 class="title">Electron Browser <span class="version">v1.1.0</span></h1>
    <div class="description">
      <p>支持Window，Linux，Mac等操作系统</p>
      <p >Electron Browser 是一款基于 <a href="https://electron.org.cn" target="_blank">Electron</a> 开发的web应用浏览器，专为网页APP打造的全屏模式浏览器，简洁，可定制。</p>
      <p>你可能也需要这样的功能，系统启动时全屏启动web应用。</p>
    </div>
    
  </div>
  
  <center>
    <a href="https://github.com/mengdu/vue-electron-chrome" target="_blank">
      <m-button size="max" type="success" round>Github</m-button>
    </a>&nbsp;&nbsp;
    <a href="https://pan.baidu.com/s/1nxh2nBb" target="_blank">
      <m-button size="max" type="info" round plain>立即下载</m-button>
    </a>
  </center>
  
  <div class="line" style="margin-top: 150px"><span class="text">截图</span></div>
  
  <div class="text-center" style="margin-top: 50px">
    <img src="../assets/20180112164122.png" alt="">
    <p class="shuoming">具有较高级版本的web内核，无需为CSS3，HTML5，Javascript等兼容性操心</p>
  </div>
  

  <div class="text-center" style="margin-top: 50px">
    <img src="../assets/20171218164524.png" alt="" style="width: 49%">
    <img src="../assets/20171218164831.png" alt="" style="width: 49%">
    <p class="shuoming">可定制窗体边框主题</p>
  </div>
  
  <div class="text-center" style="margin-top: 50px">
    <img src="../assets/20180112162056.png" alt="">
    <p class="shuoming">让应用看起来更加像桌面应用程序</p>
  </div>
  
  <div class="text-center" style="margin-top: 50px">
    <img src="../assets/20180112162152.png" alt="">
    <p class="shuoming">可以开启devtool工具调试页面</p>
  </div>

  <div class="footer">
    make by <a href="https://github.com/mengdu">@lanyue</a>，QQ：1752295326
  </div>
</div>

</div>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  }
}
</script>
<style type="text/css">
  .home-page .m-navbar{
    background-color: #e7e9f5;
  }
  .home-page .m-navbar a{
    color: #242C34;
  }
  .home-page .m-navbar{
    font-size: 16px;
  }

  .home-page img{
    max-width: 100%;
  }
  .app-info{
    width: 960px;
    padding: 0 15px;
    margin: 0 auto;
  }
  .home-page .m-btn{
    width: 150px;
  }
  .app-box{
    text-align: center;
    margin-top: 150px;
    margin-bottom: 50px;
  }
  .app-box .title{
    font-size: 40px;
    font-weight: 100;
  }
  .app-box .version{
    font-size: 14px;
    font-weight: 200;
    color: #00A0E9;
    border: solid 1px rgba(0, 139, 232, 0.27);
    border-radius: 3px;
    padding: 0 5px;
  }
  .app-box .description{
    font-size: 18px;
  }
  .shuoming{
    text-align: center;
    font-size: 20px;
    color: #3f4254;
    font-weight: 100;
    margin-bottom: 150px;
  }
  .footer{
    margin-top: 150px;
    height: 50px;
    background: #e7e9f5;
    text-align: center;
    padding: 15px;
  }
</style>
