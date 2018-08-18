<template>
  <div class="footer">
    <span>首页</span>
    <span>分类</span>
    <span>购物车</span>
    <span>我的</span>
  </div>
</template>

<script>
  export default {
    name: 'footer'
  };
</script>

<style scoped lang="scss" >
  .footer{
    display: flex;
    justify-content: space-around;
    span{
      padding-top: 20px;
    }
  }
</style>
