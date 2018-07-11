<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './views/Hello';

export default {
  name: 'app',
  components: {
    Hello
  }
};
</script>

<style>
#app {
  font-family: \.PingFangSC-Light,Helvetica Neue,Helvetica,Arial,PingFang SC,Heiti SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
}
</style>
