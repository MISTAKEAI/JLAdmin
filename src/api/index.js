import baseRequest from '@/api/baseRequest';
import systemRequest from '@/api/modul/systemRequest';
import carRequest from '@/api/modul/carRequest';
import orderRequest from '@/api/modul/orderRequest';
import dailyRequest from '@/api/modul/dailyRequest';
import lbsRequest from '@/api/modul/lbsRequest';
// 其他模块的接口……

// 导出接口
export default {
  baseRequest,
  dailyRequest,
  systemRequest,
  carRequest,
  orderRequest,
  lbsRequest
    // ……
}
