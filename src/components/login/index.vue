<template>
  <div class="login-container">
    <el-form ref="form" class="login-form" :model="form">
      <div class="title-container">
        <h3 class="title">系统管理</h3>
      </div>
      <el-form-item>
        <el-input v-model="form.userName" size="medium" placeholder="请输入账号">
          <i class="el-icon-s-custom" slot="prepend"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.passward" size="medium" placeholder="请输入密码" show-password>
           <i class="el-icon-lock"  slot="prepend"></i>
        </el-input>
      </el-form-item>
       <el-button type="primary" style="width: 100%; margin-bottom: 30px;">登录</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',

        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
  @import "../../assets/css/myadmin.css";

  .login-container {
    min-height: 100%;
    width: 100%;
    /* background-color: #2d3a4b; */
    background: url(../../../static/img/login/login.jpg) no-repeat ;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .login-container .login-form {
    position: relative;
    width: 420px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    color: #FFFFFF;
  }

  .login-container .title-container {
    position: relative;
  }

  .login-container .title-container .title {
    font-size: 26px;
    color: #eee;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: 700;
  }

  .login-container .el-form-item {
    border: 1px solid hsla(0, 0%, 100%, .3);
    background: rgba(0, 0, 0, .3);
    border-radius: 5px;
    color: #454545;
  }

  .login-container .el-input input {
    background: transparent;
    border: 0;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 12px 5px 12px 15px;
    color: #fff;
    height: 47px;
    caret-color: #fff;
  }

  .login-container .el-input-group__prepend {
    font-size: 20px;
    background: transparent;
    border: 0;
     color: #fff;
  }
</style>
