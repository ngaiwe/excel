import Vue from 'vue'
import Router from 'vue-router'
import Excel from '@/page/Excel.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Excel',
      component: Excel
    }
  ]
})
