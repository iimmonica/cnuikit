import Vue from 'vue'
import Router from 'vue-router'
import MarkDown from '@/components/MarkDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/introduction',
      name: 'Home',
      component: MarkDown
    }, {
      path: '/:page',
      name: 'MarkDown',
      component: MarkDown
    }
  ]
})
