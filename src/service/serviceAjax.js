import api from './api';
import {fetch} from './../utils/fetch';

const serviceAjax = {
  getMenuList() {  // 获取菜单路径
    return fetch({
      method: 'get',
      url: api.menuListUrl
    });
  },
  getCostOverViewData(params) {
    return fetch({
      method: 'get',
      params,
      url: api.costOverViewUrl
    });
  },
  getCostDetailData(params) {
    return fetch({
      method: 'get',
      params,
      url: api.costDetailUrl
    });
  },
  getModalData(params) {
    return fetch({
      method: 'get',
      params,
      url: api.modalDataUrl
    });
  }
};
export default serviceAjax;
