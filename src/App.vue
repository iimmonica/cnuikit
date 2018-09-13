<template>
  <div id="app">
    <div class="uk-offcanvas-content">
      <!-- 导航 -->
      <div uk-sticky class="uk-navbar-container tm-navbar-container uk-active">
        <div class="uk-container uk-container-expand">
          <nav class="uk-navbar">
            <div class="uk-navbar-left">
              <a href="./" class="uk-navbar-item uk-logo">
                <img uk-svg src="./assets/images/uikit-logo.svg" class="uk-margin-small-right">
                UIkit
              </a>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav uk-visible@m">
                <li><a href="https://getuikit.com/pro">专业版</a></li>
                <li class="uk-active"><a href="./">文档</a></li>
                <li><a href="https://getuikit.com/changelog">更新日志</a></li>
              </ul>
              <div class="uk-navbar-item uk-visible@m">
                <a href="https://getuikit.com/download" class="uk-button uk-button-default tm-button-default uk-icon"  uk-icon="icon: download">下载
              </a></div>
            </div>
          </nav>
        </div>
      </div>
      <div class="tm-sidebar-left uk-visible@m">
        <h3>文档</h3>
        <ul class="uk-nav uk-nav-default tm-nav">
          <li v-for="(head, index) in menu" :key="index" class="uk-parent">
            <a class="uk-nav-header" href="">{{ head.name }}</a>
            <ul class="uk-nav uk-nav-sub">
              <router-link v-for="(item, i) in head.children" :key="i"
                           tag="li" :to="'/'+item.id">
                <a>{{ item.name }}</a>
              </router-link>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tm-main uk-section uk-section-default">
        <div class="uk-container uk-container-amall uk-position-relative">
          <router-view :key="$route.fullPath"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menu: [{
        id: 'intro',
        name: '入门',
        children: [{
          id: 'introduction',
          name: '介绍'
        }, {
          id: 'installation',
          name: '安装'
        }, {
          id: 'less',
          name: 'Less'
        }, {
          id: 'sass',
          name: 'Sass'
        }, {
          id: 'javascript',
          name: 'JaveScript'
        }, {
          id: 'webpack',
          name: 'Webpack'
        }, {
          id: 'custom-icons',
          name: '自定义图标'
        }, {
          id: 'avoiding-conflicts',
          name: '避免冲突'
        }, {
          id: 'rtl',
          name: 'RTL支持'
        }, {
          id: 'migration',
          name: '迁移'
        }]
      }
      //      , {
      //        id: 'components',
      //        name: '组件',
      //        children: []
      //      }
      ]
    }
  }
}
</script>

<style>
</style>
