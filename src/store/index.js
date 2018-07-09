/* eslint-disable no-multi-spaces */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import feedback from './modules/feedback';

Vue.use(Vuex);

// 根级别的state，非全局状态建议分模块写在modules里
const state = {show: true};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    feedback
  }
});
