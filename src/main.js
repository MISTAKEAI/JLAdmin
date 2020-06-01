// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//引入nprogress
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入
//引入API
import api from '@/api' // 导入api接口
Vue.prototype.$api = api;
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  NProgress.start()
  store.commit("_SET_TAP_SELECT",to)
  next()
})
router.afterEach(() => {
   NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: { App },
  template: '<App/>'
})
