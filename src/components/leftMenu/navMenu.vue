<template>
  <div class="navMenu">
    <label v-for="navMenu in navMenus">
      <el-submenu v-if="navMenu.children && navMenu.children.length>0"
                  :key="navMenu.code" :data="navMenu" :index="menuConfigure[navMenu.code].router">
        <template slot="title">
          <span v-html="menuConfigure[navMenu.code].icon"></span>
          <span> {{navMenu.name}}</span>
        </template>
        <NavMenu :navMenus="navMenu.children"></NavMenu>
      </el-submenu>

      <router-link v-else="" :to="menuConfigure[navMenu.code].router" class="last-menu-name">
        <el-menu-item  :key="navMenu.code" :data="navMenu" :index="menuConfigure[navMenu.code].router">
          <span slot="title">{{navMenu.name}}</span>
        </el-menu-item>
      </router-link>

    </label>

  </div>
</template>

<script>
  import MenuConfigure from './menuConfigure.js';

  export default {
    name: 'NavMenu',
    props: ['navMenus'],
    data() {
      return {
        menuConfigure: MenuConfigure  // 默认配置参数
      };
    },
    methods: {}
  };
</script>
<style scoped lang="scss">
  .navMenu {
    label {
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        border-left: 4px solid transparent;
        &.is-active {
          border-left-color: #FA5967;
          background: rgba(0, 0, 0, 0.3) !important;
        }
      }
    }
  }
</style>
