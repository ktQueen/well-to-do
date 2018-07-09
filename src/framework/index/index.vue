<template>
  <div class="frame" id="frame" ref="frame">
    <!--头部-->
    <Heard class="header-area"></Heard>
    <div class="main">
      <!--左侧-->
      <div class="main-l" id = 'main-l'>
        <Sticky>
          <LeftMenu class="menu-second" :menuList = 'menuList'></LeftMenu>
        </Sticky>
      </div>
      <!--内容区-->
      <div class="content">
        <router-view class="content-list">
          <el-breadcrumb separator-class="el-icon-arrow-right" slot="breadCrumb">
            <el-breadcrumb-item v-for="list in breadcrumb">{{list}}</el-breadcrumb-item>
          </el-breadcrumb>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>
