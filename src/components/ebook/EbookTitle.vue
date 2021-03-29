<!--
 * @Author: zhimin
 * @Date: 2021-03-26 10:03:00
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-26 11:30:22
 * @FilePath: \hello\src\components\ebook\EbookTitle.vue
-->
<template>
  <transition name="slide-down">
    <div
      class="title-wrapper"
      v-show="menuVisible"
    >
      <div
        class="left"
        @click="handleBack"
      >
        <span class="icon">&#xe6db;</span>
      </div>
      <div class="right">
        <span class="icon">&#xe602;</span>
        <span class="icon">&#xe616;</span>
        <span class="icon">&#xe601;</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixins'
export default {
  data () {
    return {

    }
  },
  mixins: [ebookMixin],
  created () {

  },
  mounted () {

  },
  methods: {
    handleBack () {
      console.log('back')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global.scss';
.title-wrapper {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: px2rem(48);
  line-height: px2rem(48);
  font-size: px2rem(20);
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  background: #ffffff;
  z-index: 200;
  .left {
    flex-basis: px2rem(60);
    text-align: center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .icon {
      flex-basis: px2rem(40);
      text-align: center;
    }
  }
}
</style>
