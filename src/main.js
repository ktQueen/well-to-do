import Vue from 'vue';
import App from './App';
import router from './router';
// import axios from 'axios'
import store from './store';
import './style/common/reset.scss'; // 样式
import './style/common/common.scss';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
