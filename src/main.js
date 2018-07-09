import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import ElementUI from 'element-ui'; // 全量引入elementUI
import 'element-ui/lib/theme-chalk/index.css';
import './style/common/common.scss'; // 样式
import './style/common/normalize.scss';
import './icon/iconfont.css';
import {initFectch} from './utils/fetch';

Vue.use(ElementUI);
const vueInstance = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
initFectch({
  suc(res) {
    if (res.code !== 200) {
      if (res.code === 2) {
        console.log(2222);
      } else {
        vueInstance.$message({
          message: res.msg,
          type: 'error'
        });
      }
      return Promise.reject('error');
    }
  }
});
