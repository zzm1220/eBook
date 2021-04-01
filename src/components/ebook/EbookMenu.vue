<!--
 * @Author: zhimin
 * @Date: 2021-03-26 10:03:42
 * @LastEditors: zhimin
 * @LastEditTime: 2021-04-01 10:12:30
 * @FilePath: \hello\src\components\ebook\EbookMenu.vue
-->
<template>
  <div>
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        v-show="menuVisible"
      >
        <div class="icon-wrapper">
          <span class="icon">&#xe710;</span>
          <span
            class="icon"
            @click="showSettingBar(2)"
          >&#xe604;</span>
          <span
            class="icon"
            @click="showSettingBar(1)"
          >&#xe603;</span>
          <span
            class="icon"
            @click="showSettingBar(0)"
          >&#xe61e;</span>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
    <ebook-setting-font-family-popup></ebook-setting-font-family-popup>
    <ebook-setting-theme></ebook-setting-theme>
    <ebook-setting-progress></ebook-setting-progress>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixins'
import EbookSettingFont from './EbookSettingFont.vue'
import EbookSettingTheme from './EbookSettingTheme.vue'
import EbookSettingFontFamilyPopup from './EbookSettingFontFamilyPopup.vue'
import EbookSettingProgress from './EbookSettingProgress.vue'
export default {
  components: { EbookSettingFont, EbookSettingFontFamilyPopup, EbookSettingTheme, EbookSettingProgress },
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
    showSettingBar (key) {
      this.setSettingVisible(key)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/global.scss';
.menu-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 199;
  height: px2rem(48);
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  &.hide-box-shadow {
    box-shadow: none;
  }
  .icon-wrapper {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
