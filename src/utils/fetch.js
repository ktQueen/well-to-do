/**
 * Created by yuliang on 2018/5/8 10:59
 */

// 封装axios类库
// 1、统一处理报错，处理方式解耦
// 2、默认json 格式
// 3、添加拦截器，可以做权限，可以跟后端约定人性化提示

import axios from 'axios';
import {Message} from 'element-ui';

const option = {
  suc() {
  }, err() {
  }
};

// create an axios instance
const instance = axios.create({
  timeout: 5000  // request timeout
 // withCredentials: true
});

// request interceptor
instance.interceptors.request.use(
  // Do something before request is sent
  config => config,
  // Do something with request error
  error => {
    console.log('before request:::::', error);
    Message({
      message: error.message,
      type: 'error'
    });
    Promise.reject(error);
  }
);

// respone interceptor
instance.interceptors.response.use(
  response => {
    // return response.data;
    const _SUC_CB = option.suc(response.data);
    return _SUC_CB ? _SUC_CB : response.data;
  },
  error => {
    const _ERR_CB = option.err(error);
    return _ERR_CB ? _ERR_CB : Promise.reject(error);
  }
);

export function fetch(opt) {
  console.log(opt);
  return instance(opt);
}

export function initFectch(op) {
  Object.assign(option, op);
}
