/**
 * 基础url管理
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import store from '../../store/store'
import qs from 'qs';
const carRequest = {
  // 获取车辆列表
  getCarData (params) {
      return axios.get(`${base.bd}webApi/ord/1.0/getCarData`, {params});
  },
  // 根据ID获取车辆详情
  getCarDetail (params) {
      return axios.get(`${base.bd}webApi/ord/1.0/getCarDetail`, {params});
  },
  // 查询车牌是否可用
  checkCar (params) {
      return axios.get(`${base.bd}webApi/ord/1.0/checkCar`, {params});
  },
  // 车辆更新或新增
  saveCarData (params) {
      return axios.post(`${base.bd}webApi/ord/1.0/saveCarData`, qs.stringify(params));
  },
  // 车辆删除
  delCarData (params) {
      return axios.post(`${base.bd}webApi/ord/1.0/delCarData`, qs.stringify(params));
  },
}

export default carRequest;
