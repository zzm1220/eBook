<!--
 * @Author: zhimin
 * @Date: 2021-03-24 17:25:05
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-26 11:05:27
 * @FilePath: \hello\src\views\ebook\index.vue
-->
<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <router-view></router-view>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
import EbookMenu from '../../components/ebook/EbookMenu.vue'
import EbookTitle from '../../components/ebook/EbookTitle.vue'
export default {
  components: { EbookTitle, EbookMenu },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global.scss';
</style>
