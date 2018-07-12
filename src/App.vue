<template>
  <div id="app">
    <framework></framework>
  </div>
</template>

<script>
import Framework from './framework/Index';

export default {
  name: 'app',
  components: {
    Framework
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
