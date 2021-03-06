// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
//饿了么组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//引入兼容IE
import promise from 'es6-promise';
promise.polyfill();

//省市县插件
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'

//引入nprogress
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入
//引入API
import api from '@/api' // 导入api接口
Vue.prototype.$api = api;
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (store.getters._GET_USER_TOKEN != null) {
    store.commit("_SET_BY_STORAGE");
  }
  console.log(store.getters._GET_USER_TOKEN)
  if (store.getters._GET_USER_TOKEN != null) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      if (store.getters._GET_MENU_LIST.length <= 0) {
        api.baseRequest.getPerm({
            userId: store.getters._GET_USER_ID
          })
          .then(res => {
            var res = res.data
            if (res.code == 1) {
              store.commit("_SET_MENU_LIST", res.data)
              initMenu(router, store.getters._GET_MENU_LIST);
              next({ ...to,
                replace: true
              })
            }
          })
          .catch((error) => {
            store.commit("_SET_LOGIN_OUT")
            next()
          })
      } else {
        next()
      }
      store.commit("_SET_TAP_SELECT", to)
    }
  } else {
    if (to.path == '/login') { //如果是登录页面路径，就直接next()
      next();
    } else { //不然就跳转到登录；
      next('/login');
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})

//初始化菜单栏格式
export const initMenu = (router, menu) => {
  if (menu.length == 0) {
    return
  }
  let menus = formatRoutes(menu);
  let unfound = {
    path: '*',
    component: () => import('@/components/error/404'),
    hidden: true,
    childList: []
  }
  menus.push(unfound)
  router.$addRoutes(menus)
  store.commit("_SET_ROUTER_MENU", menus.concat(router.options.routes))
}

//把菜单栏转换成路由格式
export const formatRoutes = (aMenu) => {
  const aRouter = []
  if (aMenu != null) {
    aMenu.forEach(oMenu => {
      const {
        id,
        path,
        parentId,
        component,
        name,
        icon,
        resouce,
        childList
      } = oMenu
      let filePath;
      let oRouter;
      if (path == '/') {
        oRouter = {
          id: id,
          path: path,
          parentId: parentId,
          component(resolve) {
            require([`./${component}`], resolve)
          },
          icon: icon,
          children: formatRoutes(childList)
        }
      } else if (resouce == 1) {
        console.log("a")
        oRouter = {
          id: id,
          path: path,
          component(resolve) {
            require([`./${component}`], resolve)
          },
          icon: icon,
          children: formatRoutes(childList)
        }
      } else {
        oRouter = {
          id: id,
          path: path,
          component(resolve) {
            require([`./${component}`], resolve)
          },
          icon: icon,
          name: name,
          children: formatRoutes(childList)
        }
      }

      if (oMenu.component != undefined && oMenu.component != null) {
        aRouter.push(oRouter)
      }
    })
  }
  return aRouter
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: {
    App
  },
  template: '<App/>'
})
