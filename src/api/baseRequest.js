/**
  * 基础url管理
  */

import base from './base'; // 导入接口域名列表
import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs';
import store from '../store/store'
const baseRequest = {
    // post提交登录
    login (params) {
        return axios.post(`${base.bd}webApi/base/1.0/login`, qs.stringify(params));
    },
    // post提交登录
    getPerm (params) {
        return axios.post(`${base.bd}webApi/base/1.0/getPerm`, qs.stringify(params));
    },
	 logout (params) {
	    return axios.post(`${base.bd}webApi/base/1.0/logout`, qs.stringify(params));
	},
	 getAllDict (params) {
	    return axios.get(`${base.bd}webApi/base/1.0/getAllDict`, {params});
	},
	// 首页信息查询
	getHomeDataForCountDateEasy (params) {
	    return axios.get(`${base.bd}webApi/home/1.0/getHomeDataForCountDateEasy`, {params});
	},
}

export default baseRequest;
