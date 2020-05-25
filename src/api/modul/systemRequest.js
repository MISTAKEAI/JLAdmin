/**
  * 基础url管理
  */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import store from '../../store/store'
import qs from 'qs';
const systemRequest = {
  //字典查询列表
  getDictData (params) {
      return axios.get(`${base.bd}webApi/sys/1.0/getDictData`, {params});
  },
  // 字典新增和更新
  saveDictData (params) {
      return axios.post(`${base.bd}webApi/sys/1.0/saveDictData`, qs.stringify(params));
  },
  //角色查询列表
  getRoleData (params) {
      return axios.get(`${base.bd}webApi/sys/1.0/getRoleData`, {params});
  },
  // 角色删除
  delRoleData (params) {
      return axios.post(`${base.bd}webApi/sys/1.0/delRoleData`, qs.stringify(params));
  },
  // 角色新增和更新
  saveRoleData (params) {
      return axios.post(`${base.bd}webApi/sys/1.0/saveRoleData`, qs.stringify(params));
  },
}

export default systemRequest;
