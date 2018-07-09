/**
 * Created by yuliang on 2018/5/7 18:00
 */
import Heard from '../../components/header/header-common';
import '../../style/common/rewrite.scss';

import axios from 'axios';
import api from '../../service/api';

export default {
  name: 'app',
  components: {Heard},
  data() {
    return {
      data: {},
      originStaff: {},
      img: 'http://work.daojia-inc.com/img/men.png'
    };
  },
  async created() {
//    获取齐全的用户信息
    this.getPersonInfoPromise().then(res => {
      this.data = res.data;
      this.originStaff = res.data.data.originStaff;
      if (res.data.data.imageSrc) {
        this.img = res.data.data.imageSrc;
      }
    }).catch(err => console.log(err));
  },
  watch: {},
  methods: {
    getPersonInfoPromise() {
      return axios({
        method: 'get',
        url: 'http://work.daojia-inc.com/workpersoninfo/personinfo',
        withCredentials: true
      });
    }
  }
};



