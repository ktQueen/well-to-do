<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: '欢迎使用vue-common模板'
    };
  }
};
</script>

<style scoped>
h1 {
  font-weight: normal;
  font-size: 1.2em;
}
</style>
