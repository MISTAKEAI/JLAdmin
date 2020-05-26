<template>
  <el-dialog title="车辆编辑" v-loading="loading" top=2vh width="950px" :visible.sync="dialogFormVisible"
    :close-on-click-modal="false" @close="closeDialog">
      <el-form :model="form" :rules="rules" ref="ruleForm"  style="margin-left: 13%;">
        <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
       </el-row>
        <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
         </el-row>
        <el-row :gutter="20">
          <el-col :span="5">
            <el-form-item label="车辆正面图片" prop="path">
              <el-upload style="margin-top: 40px;" class="avatar-uploader" action="" :auto-upload="false" :show-file-list="false"
                :on-change="handleBackImgUrl" accept="image/jpeg,image/gif,image/png">
                <img v-if="form.frontImgUrl" :src="form.frontImgUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="车辆背面图片" prop="path">
              <el-upload style="margin-top: 40px;" class="avatar-uploader" action="" :auto-upload="false" :show-file-list="false"
                :on-change="handleBackImgUrl" accept="image/jpeg,image/gif,image/png">
                <img v-if="form.url" :src="form.url" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="行驶证图片" prop="path">
              <el-upload style="margin-top: 40px;" class="avatar-uploader" action="" :auto-upload="false" :show-file-list="false"
                :on-change="handleBackImgUrl" accept="image/jpeg,image/gif,image/png">
                <img v-if="form.url" :src="form.url" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="保单图片" prop="path">
              <el-upload style="margin-top: 40px;" class="avatar-uploader" action="" :auto-upload="false" :show-file-list="false"
                :on-change="handleBackImgUrl" accept="image/jpeg,image/gif,image/png">
                <img v-if="form.url" :src="form.url" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          </el-form-item>
          </el-col>

        </el-row>
      </el-form>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        dialogFormVisible: false,
        form: {
          name: null,
          url:null,
        },
        rules: {}
      };
    },
    methods: {
      init(){
        let that = this;
        that.dialogFormVisible = true;
      },
      closeDialog() {

      },
      handleBackImgUrl(){
        let that = this;
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        } else {
          var reader = new FileReader();
          reader.readAsDataURL(file.raw);
          reader.onload = function(e) {
            that.form.insurancePolicyImgUrl = e.target.result;
          }
        }
      }
    }
  };
</script>

<style>
  .el-dialog__body {
    height: 70vh;
    overflow: auto;
  }


</style>
