<template>
  <el-menu
    :default-active="$route.path"
    :unique-opened=true
    mode="vertical"
    text-color="#fff"
    background-color="#244075"
    active-text-color="#FA5967">
    <NavMenu :navMenus="menuList"></NavMenu>
  </el-menu>
</template>
<script>
  import NavMenu from './navMenu.vue';

  export default {
    name: 'LeftMenu',
    props: ['menuList'],
    components: {NavMenu},
    data() {
      return {};
    },
    methods: {}
  };
</script>
