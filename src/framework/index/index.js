import Heard from '../../components/header/header-common.vue';
import LeftMenu from '../../components/leftMenu/index.vue';
import Sticky from '../../components/Sticky/index.vue';
import Service from '../../service/serviceAjax';

export default {
  name: 'page',
  components: {Heard, LeftMenu, Sticky},
  data() {
    return {
      menuList: [], // 左侧菜单数据
      breadcrumb: ['费用中心', '费用总览']   // 面包屑默认参数
    };
  },
  created() {
    this.getMenuListDataFn(); // 获取菜单数据
  },
  watch: {
    $route() {
      this.changeRouter(); // 监控路由改变
    }
  },
  methods: {
    getMenuListDataFn() {
      Service.getMenuList().then(res => {
        this.menuList = res.data;
      });
    },
    changeRouter() {
      this.breadcrumb = this.$router.currentRoute.meta.title; // 获取面包屑内容
    }
  }
};

