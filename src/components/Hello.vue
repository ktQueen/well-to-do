<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="http://confluence.daojia-inc.com/pages/viewpage.action?pageId=45948660" target="_blank">vue-common模板说明文档</a></li>
      <li><a href="http://git.daojia-inc.com/groups/felib" target="_blank">到家基础组件库</a></li>
      <li><a href="http://confluence.daojia-inc.com/pages/viewpage.action?pageId=45941507" target="_blank">到家基础组件列表</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎使用vue-common模板'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 1.2em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
}

a {
  color: #42b983;
}
</style>
