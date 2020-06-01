import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = { //要设置的全局访问的state对象
  USER_INFO:null,
  MENU_LIST: [], //当前菜单栏
  TAP_LIST: [], //当前历史标签列表
  CURRENT_INFO: null, //当前路由对象
  CURRENT_MENU: null,
  CURRENT_TAP: 0,
  ACTIVE_NAME: null,
};

const getters = {
  //获取用户信息
  _GET_USER_INFO(state){
    return state.USER_INFO
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
  //设置登录信息
  _GET_USER_INFO(state,value){
    state.USER_INFO = value
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
  _SET_ACTIVE_NAME(state, value) {
    state.ACTIVE_NAME = value
  },
  _SET_CURRENT_TAP(state, value) {
    state.CURRENT_TAP = value
  },
  _SET_TAP_SELECT(state, value) {
    if (value.path != "/") {
      if (state.MENU_LIST.length > 0) {
        let data = state.MENU_LIST;
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
    if (c.childern != null) {
      if (c.childern.length > 0) {
        forEc(c.childern, path);
      }
    }
  })
}
