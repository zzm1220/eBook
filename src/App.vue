<!--
 * @Author: zhimin
 * @Date: 2021-03-23 17:42:50
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-24 17:24:39
 * @FilePath: \hello\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
export default {

}
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
