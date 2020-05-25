/**
 * 基础url管理
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import store from '../../store/store'
import qs from 'qs';
const dailyRequest = {
  // 用户列表查询
  getUserData(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getUserData`, {
      params
    });
  },
  // 用户详情查询
  getUserDetail(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getUserDetail`, {
      params
    });
  },
  // 查询电话号码是否可用
  checkPhone(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/checkPhone`, {
      params
    });
  },
  // 查询用户名是否可用
  checkUsername(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/checkUsername`, {
      params
    });
  },
  // 用户更新或新增
  saveUserData(params) {
    return axios.post(`${base.bd}webApi/daily/1.0/saveUserData`, qs.stringify(params));
  },
  // 用户删除
  delUserData(params) {
    return axios.post(`${base.bd}webApi/daily/1.0/delUserData`, qs.stringify(params));
  },
  // 用户下拉查询
  getSelectByUser(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getSelectByUser`, {
      params
    });
  },
  // 获取公司列表
  getCompanyData(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getCompanyData`, {
      params
    });
  },
  // 获取公司下拉列表
  getCompanySelect(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getCompanySelect`, {
      params
    });
  },
  // 获取部门列表
  getDeptData(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getDeptData`, {
      params
    });
  },
  // 获取部门下拉
  getDeptSelect(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getDeptSelect`, {
      params
    });
  },
  // 获取部门详情
  getDeptDetail(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getDeptDetail`, {
      params
    });
  },
  // 部门更新或新增
  saveDeptData(params) {
    return axios.post(`${base.bd}webApi/daily/1.0/saveDeptData`, qs.stringify(params));
  },
  // 部门删除
  delDeptData(params) {
    return axios.post(`${base.bd}webApi/daily/1.0/delDeptData`, qs.stringify(params));
  },
  // 获取流程组审核调度下拉查询
  getFlowSelcect(params) {
    return axios.get(`${base.bd}webApi/daily/1.0/getFlowSelcect`, {
      params
    });
  },
  //保存流程组
  saveFlow(params) {
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return axios.post(`${base.bd}webApi/daily/1.0/saveFlow`, params, config);
  },
  // 获取流程组审核调度下拉查询
  getFlowByGroupId (params) {
      return axios.get(`${base.bd}webApi/daily/1.0/getFlowByGroupId`, {params});
  },
  // 部门编号检测
  checkDeptCode (params) {
      return axios.get(`${base.bd}webApi/daily/1.0/checkDeptCode`, {params});
  },
}

export default dailyRequest;
