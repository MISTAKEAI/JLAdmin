import Vue from 'vue'
import Router from 'vue-router'
import api from '@/router/api'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: api.login,
    hidden: true
  },
  {
    path: '/',
    component: api.main,
    hidden: true,
    children:[{
      id:0,
      path: '/',
      name:'home',
      component:api.home
    }]
  }
 ]
export default new Router({
  routes: constantRouterMap
})
