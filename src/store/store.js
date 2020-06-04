import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = { //要设置的全局访问的state对象
  USER_ID:null,
  USER_TOKEN:null,
  USER_INFO:null,
  MENU_LIST: [], //当前菜单栏
  ROUTER_MENU:[], //当前路由菜单栏
  TAP_LIST: [], //当前历史标签列表
  CURRENT_INFO: null, //当前路由对象
  CURRENT_MENU: null, //当前路径
  CURRENT_TAP: 0, //当前选中的历史标签id
  ACTIVE_NAME: null, //选中的一级菜单栏
};

const getters = {
  //获取用户信息
  _GET_USER_INFO(state){
    return state.USER_INFO
  },
  //获取用户ID
  _GET_USER_ID(state){
    return state.USER_ID
  },
  //获取用户token
  _GET_USER_TOKEN(state){
    return state.USER_TOKEN
  },
  //获取路由对象
  _GET_CURRENT_INFO(state) {
    return state.CURRENT_INFO
  },
  //获取历史标签列表
  _GET_TAP_LIST(state) {
    return state.TAP_LIST
  },
  //获取当前菜单栏
  _GET_MENU_LIST(state) {
    return state.MENU_LIST
  },
  //获取当前选择的历史标签
  _GET_CURRENT_TAP(state, value) {
    return state.CURRENT_TAP
  },
};
const mutations = {
  //设置用户信息
  _SET_USER_INFO(state,value){
    state.USER_INFO = value
  },
  //获取本地localStorage值
  _SET_BY_STORAGE(state,value){
    state.USER_ID = JSON.parse(localStorage.getItem("_storeUserId"));;
    state.USER_TOKEN = JSON.parse(localStorage.getItem("_storeToken"));;
  },
  //设置登录存储
  _SET_LOGIN_STORAGE(state,value) {
    localStorage.setItem("_storeUserId",value.userId);
    localStorage.setItem("_storeToken",value.token);
  },
  //设置退出清空本地缓存
  _SET_LOGIN_OUT(state) {
    state.USER_TOKEN = null;
    state.USER_INFO = null;
    state.USER_ID = null;
    state.MENU_LIST = null,
    localStorage.clear();
  },
  //设置路由对象
  _SET_CURRENT_INFO(state, value) {
    state.CURRENT_INFO = value
  },
  //设置当前菜单栏
  _SET_MENU_LIST(state, value) {
    state.MENU_LIST = value
  },
  //设置当前历史标签
  _SET_TAP_LIST(state, value) {
    state.TAP_LIST = value
  },
  //设置当前头部菜单栏选中
  _SET_CURRENT_MENU(state, value) {
    state.CURRENT_MENU = value
  },
  //设置选中的一级菜单栏
  _SET_ACTIVE_NAME(state, value) {
    state.ACTIVE_NAME = value
  },
  //设置当前历史菜单选中
  _SET_CURRENT_TAP(state, value) {
    state.CURRENT_TAP = value
  },
  //设置路由菜单
  _SET_ROUTER_MENU(state, value) {
    state.ROUTER_MENU = value
  },
  _SET_TAP_SELECT(state, value) {
    if (value.path != "/") {
      if (state.ROUTER_MENU.length > 0) {
        let data = state.ROUTER_MENU;
        forEc(data, value.path);
      }
    } else {
      state.CURRENT_TAP = 0
      state.CURRENT_MENU = null
    }
  }
};
const actions = {

};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;

var actveName = null
let forEc = function(data, path) {
  let flg = false;
  var info = null;
  data.forEach(function(c) {
    if (c.parentId == 0) {
      actveName = c.id
    }
    if (c.path == path) {
      state.ACTIVE_NAME = actveName
      if (state.TAP_LIST.length > 0) {
        state.TAP_LIST.forEach(function(d) {
          if (d.path == c.path) {
            flg = true;
            info = d;
          }
        })
        if (flg == false) {
          c.isFather = state.ACTIVE_NAME;
          state.TAP_LIST.push(c);
        } else {
          state.ACTIVE_NAME = info.isFather
        }
      } else {
        c.isFather = state.ACTIVE_NAME;
        state.TAP_LIST.push(c);
      }
      state.CURRENT_TAP = c.id
      c.index = state.TAP_LIST.length - 1
      state.CURRENT_INFO = c;
      state.CURRENT_MENU = c.path
      return
    }
    if (c.children != null) {
      if (c.children.length > 0) {
        forEc(c.children, path);
      }
    }
  })
}
