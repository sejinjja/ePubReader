<template>
  <div id="app">
    <router-view class="view"></router-view>
    <div class="popup-anchor"></div>
  </div>
</template>

<script>
  export default {
    name: 'EPubReader'
  }
</script>

<style scoped lang="scss">
  #app {
    width: 100%;
    height: 100%;
    .view {
      width: 100%;
      height: 100%;
    }
    .popup-anchor {
      display: none;
    }
  }
</style>
