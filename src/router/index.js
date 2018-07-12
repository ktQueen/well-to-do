import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Index';

Vue.use(Router);

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
