import Vue from 'vue';
import Router from 'vue-router';
import Page from '../framework/index/index.vue';
import PersonInfo from '../framework/person-info/index.vue';
import OverView from '../views/cost/overView.vue';
import Detail from '../views/cost/detail.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/operation/cost/overView',
    meta: {
      title: '费用中心> 费用总览'
    }
  },
  {
    path: '/operation',
    component: Page,
    children: [
      {
        path: '/operation/cost/overView',
        component: OverView,
        meta: {
          title: ['费用中心', '费用总览']
        }
      }, {
        path: '/operation/cost/detail',
        component: Detail,
        meta: {
          title: ['费用中心', '消费明细']
        }
      }]
  },
  {
    path: '/person-info',
    component: PersonInfo
  }
];
export default new Router({
  routes
});
