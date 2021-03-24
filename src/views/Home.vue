<!--
 * @Author: zhimin
 * @Date: 2021-03-23 17:42:51
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-24 11:06:08
 * @FilePath: \hello\src\views\Home.vue
-->
<template>
  <div class="home">
    <div id="read"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Epub from 'epubjs'

export default {
  name: 'Home',
  mounted () {
    // 解析电子书
    this.book = new Epub('/2018_Book_AgileProcessesInSoftwareEngine.epub')
    console.log(this.book)
    // 挂载到DOM节点并显示
    this.book.renderTo('read', {
      width: window.innerWidth,
      height: window.innerHeight
    }).display()
  }
}
</script>
<style>
.demo {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
