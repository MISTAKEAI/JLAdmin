/**
  * 基础url管理
  */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import store from '../../store/store'
import qs from 'qs';
const orderRequest = {
  // 获取订单列表
  getOrderData (params) {
      return axios.get(`${base.bd}webApi/ord/1.0/getOrderData`, {params});
  },
  // 根据用户ID获取订单归属列表
  getGroupListByPassengerId (params) {
	    return axios.get(`${base.bd}webApi/ord/1.0/getGroupListByPassengerId`, {params});
  },
  // 订单申请
  saveOrderApply (params) {
      return axios.post(`${base.bd}webApi/ord/1.0/saveOrderApply`, qs.stringify(params));
  },
}

export default orderRequest;
