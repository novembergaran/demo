import Vue from 'vue'
import Router from 'vue-router'
import Foooter from '@/components/Foooter'
import lVideo from '@/page/Video'
import Mainer from '@/components/Mainer'
import lMusic from '@/page/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainer',
      component: Mainer
    },
    {
      path: '/V',
      name: 'lVideo',
      component: lVideo
    },
    {
      path: '/M',
      name: 'lMusic',
      component: lMusic
    }
  ]
})
