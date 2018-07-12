<template>
  <div class="frame" id="frame" ref="frame">
    <!--头部组件-->
    <div class="head-wrap">header</div>
    <!--内容区域-->
    <div class="body-wrap">
      <router-view class="body-container"></router-view>
    </div>
    <!--底部组件-->
    <foot class="foot-wrap"></foot>
  </div>
</template>

<script>
  // 底部组件
  import Foot from '@/framework/Foot';
  export default {
    name: 'framework',
    components: {
      Foot
    }
  };
</script>

<style scoped lang="scss" >
  .frame {
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  // 头部区域
  .head-wrap{
    width: 100%;
    height: 60px;
  }
  // 内容区域
  .body-wrap{
    flex: 1;
    width: 100%;
    padding: 20px;
    background: #fff;
  }
  .body-container{
    width: 100%;
    height: 100%;
    background: #fff;
  }
  //底部区域
  .foot-wrap{
    width: 100%;
    height: 60px;
  }
</style>
