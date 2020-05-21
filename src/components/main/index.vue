<template>
  <el-container>
    <el-aside :width="menuWidth+'px'">
      <el-menu background-color="#191a23" text-color="#fff" active-text-color="#fff" :collapse="isCollapse">
        <div class="logo" :class="{'log-active':menuWidth==180}">
          <span v-if="menuWidth == 180">鲸落企业版</span>
        </div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">企业管理</span>
          </template>
          <el-menu-item index="1-1">公司管理</el-menu-item>
          <el-menu-item index="1-2">部门管理</el-menu-item>
          <el-menu-item index="1-3">员工管理</el-menu-item>
        </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">企业管理</span>
          </template>
          <el-menu-item index="2-1">公司管理</el-menu-item>
          <el-menu-item index="2-2">部门管理</el-menu-item>
          <el-menu-item index="2-3">员工管理</el-menu-item>
        </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <div class="header-hide" @click="trigger()">
          <el-button icon="el-icon-s-fold" type="text"></el-button>
        </div>
        <div class="tab-wrap">
          <el-tabs v-model="activeName">
            <el-tab-pane label="日常管理" name="1"></el-tab-pane>
            <el-tab-pane label="订单管理" name="2"></el-tab-pane>
            <el-tab-pane label="财务管理" name="3"></el-tab-pane>
            <el-tab-pane label="报表管理" name="4"></el-tab-pane>
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
            <div class="tap-title tap-active" ref="taps">
              <span>首页</span>
            </div>
            <template v-for="(item, index) in tapList">
              <div class="tap-title" ref="taps" @click="toTap(item,index)">
                <span>{{item.name}}{{index}}</span>
                <i class="el-icon-close"></i>
              </div>
            </template>
          </div>
        </div>
        <i class="vicon-left el-icon-arrow-right" @click="rightSlither()"></i>
        <div class="tap-dropdown">
          <el-dropdown>
            <span>
              <div class="tap-btn">
                <i class="el-icon-arrow-down">
                </i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>关闭当前</el-dropdown-item>
              <el-dropdown-item>关闭其他</el-dropdown-item>
              <el-dropdown-item>关闭全部</el-dropdown-item>
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
        activeName: "1", //头部菜单模块第一个高亮
        divWidth: 0,
        tapList: [{
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },

          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
          {
            name: "个人中心"
          },
        ]
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
      rightSlither() {
        let that = this;
        that.$nextTick(() => {
          var size = 0;
          for (var n = 0; n < that.$refs.taps.length; n++) {
            size += that.$refs.taps[n].offsetWidth
          }

          that.divWidth = -size + that.$refs.tapScr.clientWidth / 1.2
        })
      },
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
      }
    },
  };
</script>

<style>
  @import "../../assets/css/myadmin.css";
</style>
