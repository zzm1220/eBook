<!--
 * @Author: zhimin
 * @Date: 2021-03-31 11:18:36
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-31 15:51:55
 * @FilePath: \hello\src\components\ebook\EbookSettingTheme.vue
-->
<template>
  <transition name="slide-up">
    <div
      class="setting-wrapper"
      v-show="menuVisible&&settingVisible===1"
    >
      <div class="setting-theme">
        <div
          class="setting-theme-item"
          v-for="(item,index) in themeList"
          :key="index"
          @click="setTheme(index)"
        >
          <div
            class="preview"
            :style="{background:item.style.body.background}"
          ></div>
          <div
            class="text"
            :class="{selected: item.name == defaultTheme}"
          >{{item.alias}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { saveTheme } from '../../utils/localStorage'
import { ebookMixin } from '../../utils/mixins'
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  mixins: [ebookMixin],
  created () {

  },
  mounted () {

  },
  methods: {
    setTheme (index) {
      const theme = this.themeList[index]
      this.setDefaultTheme(theme.name).then(() => {
        this.currentBook.rendition.themes.select(this.defaultTheme)
        saveTheme(this.bookName, this.defaultTheme)
        this.initGlobalStyle()
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global.scss';
.setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  right: 0;
  width: 100%;
  height: px2rem(60);
  background: #ffffff;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  z-index: 199;
  .setting-theme {
    height: 100%;
    display: flex;
    align-items: center;
    .setting-theme-item {
      height: 100%;
      box-sizing: border-box;
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: px2rem(5);
      .preview {
        flex: 1;
      }
      .text {
        flex: 0 0 px2rem(20);
        height: px2rem(20);
        line-height: px2rem(20);
        font-size: px2rem(14);
        color: #ccc;
        &.selected {
          color: #333;
        }
      }
    }
  }
}
</style>
