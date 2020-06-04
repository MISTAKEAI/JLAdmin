import Vue from 'vue'
import Router from 'vue-router'
import api from '@/router/api'

Vue.use(Router)
export const constantRouterMap = [{
    path: '/login',
    name: 'login',
    component: api.login,
    hidden: true
  },
  {
    path: '/',
    component: api.main,
    hidden: true,
    children: [{
      id: 0,
      path: '/',
      name: 'home',
      component: api.home
    }]
  }
]

const createRouter = () => new Router({
  routes: constantRouterMap
})

const router = createRouter()

router.$addRoutes = (params) => {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher // the relevant part
  router.addRoutes(params)
}
export default router
