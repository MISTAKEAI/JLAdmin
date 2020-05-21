import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main/index.vue'
import home from '@/views/main/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[{
        path: '/index',
        name:'home',
        component:home
      },
      {
        path: '/home',
        name:'home1',
        component:home
      }]
    }
  ]
})
