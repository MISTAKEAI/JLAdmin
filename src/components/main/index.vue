<template>
  <el-container >
    <el-aside :width="menuWidth+'px'">
      <el-menu  background-color="#20222a"
      text-color="#909399"
      active-text-color="#fff"   :default-active="this.$store.state.CURRENT_MENU"
        router :collapse="isCollapse">
        <div class="logo" :class="{'log-active':menuWidth!=180}" router>
          <span v-if="menuWidth == 180"><i class="iconfont icon-jingyu"></i>&nbsp;&nbsp;鲸落企业版</span>
          <i class="iconfont icon-jingyu" v-else></i>
        </div>
        <template v-for="(it, index) in menuList">
          <template v-for="(item, index) in it.childern">
            <el-submenu :index="item.id" v-show="$store.state.ACTIVE_NAME == it.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <template v-for="(it, index) in item.childern">
                <el-menu-item :index="it.path">{{it.name}}</el-menu-item>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <div class="header-hide" @click="trigger()">
          <el-button icon="el-icon-s-fold" type="text"></el-button>
        </div>
        <div class="tab-wrap">
          <el-tabs v-model="$store.state.ACTIVE_NAME">
            <template v-for="(item, index) in menuList">
              <el-tab-pane :label="item.name" :name="item.id"></el-tab-pane>
            </template>
          </el-tabs>
        </div>
        </div>
        <div class="user-box">
          <i class="el-icon-full-screen user-select" @click="fullScreen()"></i>
          <el-dropdown class="user-select">
            <span class="el-dropdown-link">
              <i class="el-icon-message-solid top-icon"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><b><i class="iconfont icon-xiaoxi" style="color: darkorange;"></i></b>&nbsp;&nbsp;你收到

                条订单消息&nbsp;&nbsp;</el-dropdown-item>
              <el-dropdown-item><b><i class="iconfont icon-xiaoxi" style="color: #FF5722;"></i></b>&nbsp;&nbsp;你收到

                条平台消息&nbsp;&nbsp;</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown class="user-select">
            <span class="el-dropdown-link">
              李楚汉<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <div class="tap-select">
        <i class="vicon-left el-icon-arrow-left" @click="leftSlither()"></i>
        <div class="tap-select-content" ref="tapScr">
          <div class="next-select-content" :style="{'transform':'translateX('+divWidth+'px)'}">
            <div class="tap-title" ref="taps" @click="toTap(null,0)" :class="{'tap-active':$store.state.CURRENT_TAP==0}">
              <span>首页</span>
            </div>
            <template v-for="(item, index) in $store.getters._GET_TAP_LIST">
              <div class="tap-title" ref="taps" @click="toTap(item,index)" :class="{'tap-active':$store.state.CURRENT_TAP==item.id}">
                <span>{{item.name}}</span>
                <i class="el-icon-close" @click.stop="delTap(item,index)"></i>
              </div>
            </template>
          </div>
        </div>
        <i class="vicon-left el-icon-arrow-right" @click="rightSlither()"></i>
        <div class="tap-dropdown">
          <el-dropdown @command="handleCommand">
            <span>
              <div class="tap-btn">
                <i class="el-icon-arrow-down">
                </i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="closeNow">关闭当前</el-dropdown-item>
              <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
              <el-dropdown-item command="closeAll">关闭全部</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-main>
        <div class="content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import screenfull from 'screenfull'
  export default {
    data() {
      return {
        isCollapse: false, //左侧菜单栏伸缩
        menuWidth: 180, //左侧菜单伸缩宽度
        activeName: null, //头部菜单模块第一个高亮
        divWidth: 0, //历史标签滑动条滑动值
        menuList: this.$store.getters._GET_MENU_LIST, //菜单栏信息
      }
    },
    methods: {
      //全屏按钮
      fullScreen() {
        screenfull.toggle();
      },
      //菜单伸缩
      trigger() {
        let that = this
        if (that.isCollapse) {
          that.isCollapse = false
          that.menuWidth = 180
        } else {
          that.menuWidth = 60
          that.isCollapse = true
        }
      },
      //历史记录滑动条左边按钮
      leftSlither() {
        let that = this;
        that.divWidth = 0;
      },
      //历史记录滑动条右边按钮
      rightSlither() {
        let that = this;
        that.$nextTick(() => {
          var size = 0;
          for (var n = 0; n < that.$refs.taps.length; n++) {
            size += that.$refs.taps[n].offsetWidth
          }
          if (size - that.$refs.tapScr.clientWidth / 1.2 > 0) {
            that.divWidth = -size + that.$refs.tapScr.clientWidth / 1.2
          }
        })
      },
      //历史标签操作
      handleCommand(command) {
        let that = this;
        var data = that.$store.getters._GET_CURRENT_INFO;
        if (command == "closeNow") {
          if (that.$router.currentRoute.fullPath != "/") {
            let that = this;
            var url = "/";
            if (data.id == that.$store.getters._GET_CURRENT_TAP) {
              if (data.index != 0) {
                var info = that.$store.getters._GET_TAP_LIST[data.index - 1];
                console.log(data.index)
                url = info.path;
                that.$store.commit("_SET_CURRENT_MENU", info.id)
              }
              that.$router.push({
                path: url
              })
            }else{
              that.$store.commit("_SET_CURRENT_MENU", data.id)
            }
            that.$store.getters._GET_TAP_LIST.splice(data.index, 1)
          }
        } else if (command == "closeOther") {
          if (that.$store.getters._GET_TAP_LIST.length > 0) {
            for (var n = 0; n < that.$store.getters._GET_TAP_LIST.length; n++) {
              var info = that.$store.getters._GET_TAP_LIST[n];
              if (info.id != that.$store.getters._GET_CURRENT_INFO.id) {
                that.$store.getters._GET_TAP_LIST.splice(info.index, 1)
              }
            }
          }
        } else {
          that.$store.commit("_SET_TAP_LIST", [])
          if (that.$router.currentRoute.fullPath != "/") {
            that.$router.push({
              path: "/"
            })
            that.$store.commit("_SET_CURRENT_MENU", null);
          }
        }
      },
      //点击历史标签
      toTap(data, index) {
        let that = this;
        that.$nextTick(() => {
          var size = 0;
          for (var n = 0; n < index; n++) {
            size += that.$refs.taps[n].offsetWidth
          }
          if (that.$refs.tapScr.clientWidth / 1.4 - size < 0) {
            that.divWidth = that.$refs.tapScr.clientWidth / 1.4 - size
          } else {
            that.divWidth = 0
          }
        })
        if (data == null) {
          if (that.$router.currentRoute.fullPath != "/") {
            that.$router.push({
              path: "/"
            })
          }
          that.$store.getters._SET_CURRENT_TAP = 0
          return
        }

        if (data.id != that.$store.getters._GET_CURRENT_TAP) {
          that.$router.push({
            path: data.path
          })
        }

      },
      //删除历史标签
      delTap(data, index) {
        let that = this;
        var url = "/";
        if (data.id == that.$store.getters._GET_CURRENT_TAP) {
          if (index != 0) {
            var info = that.$store.getters._GET_TAP_LIST[index - 1];
            url = info.path;
            that.$store.commit("_SET_CURRENT_MENU", info.id)
          }
          that.$router.push({
            path: url
          })

        } else {
          that.$store.commit("_SET_CURRENT_MENU", data.id)
        }

        that.$store.getters._GET_TAP_LIST.splice(index, 1)
      }
    },
    //页面初始化
    created() {
      let that = this;
      var menu = that.$store.getters._GET_MENU_LIST;
      if (menu.length > 0) {
        that.$store.state.ACTIVE_NAME = menu[0].id
        if (that.$router.currentRoute.fullPath != "/") {
          if (that.$store.getters._GET_TAP_LIST.length == 0) {
            that.$router.push({
              path: '/'
            })
            that.$store.commit("_SET_CURRENT_INFO", null);
          } else {
            that.$store.state.ACTIVE_NAME = that.$store.getters._GET_CURRENT_INFO.isFather
          }
        }
      }
    }
  };
</script>

<style>
  @import "../../assets/css/myadmin.css";
  @import "//at.alicdn.com/t/font_1237458_jwmvxqkltdl.css";
</style>
