<!--
 * @Author: zhimin
 * @Date: 2021-03-23 17:42:51
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-24 16:11:42
 * @FilePath: \hello\src\views\About.vue
-->
<template>
  <div class="about">
    <h1 class="about-title">This is an about page</h1>
    <span class="icon">&#xe600;</span>
    <span>{{name}}</span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['name'])
  },
  mounted () {
    console.log(this.name)
  }
}
</script>
<style scoped>
.about-title {
  font-family: 'Days One';
  font-size: 30px;
  color: orange;
}
</style>
