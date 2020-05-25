<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    overflow: hidden;
    position: relative;
    min-width: 1280px;
    height: 100%;
    width: 100%;
  }
</style>
