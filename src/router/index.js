import Vue from 'vue'
import Router from 'vue-router'
import Foooter from '@/components/Foooter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Foooter',
      component: Foooter
    }
  ]
})
