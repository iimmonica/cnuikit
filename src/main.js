// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './assets/css/theme.css'

Vue.config.productionTip = false

UIkit.use(Icons)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
