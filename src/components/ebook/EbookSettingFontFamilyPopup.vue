<!--
 * @Author: zhimin
 * @Date: 2021-03-29 10:08:34
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-31 10:09:32
 * @FilePath: \hello\src\components\ebook\EbookSettingFontFamilyPopup.vue
-->
<template>
  <transition name="popup-slide-up">
    <div
      class="ebook-popup-list"
      v-show="fontFamilyVisible"
    >
      <div class="ebook-popup-title">
        <span
          class="ebook-popup-title-icon icon"
          @click="handleHide"
        >&#xe606;</span>
        <span class="ebook-popup-title-text">{{$t('book.selectFont')}}</span>
      </div>
      <div class="ebook-popup-list-wrapper">
        <div
          class="ebook-popup-item"
          v-for="(item,index) in fontFamilyList"
          :key="index"
          @click="setFontFamily(item.font)"
        >
          <div :class="['ebook-popup-item-text',{'selected':isSelected(item)}]">{{item.font}}</div>
          <span class="ebook-popup-item-select icon">&#xe67e;</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixins'
import { FONT_FAMILY_LIST } from '../../utils/book'
import { saveFontFamily } from '../../utils/localStorage'
export default {
  data () {
    return {
      fontFamilyList: FONT_FAMILY_LIST
    }
  },
  mixins: [ebookMixin],
  created () {

  },
  mounted () {
  },
  methods: {
    handleHide () {
      this.setFontFamilyVisible(false)
    },
    isSelected (item) {
      return item.font === this.defaultFontFamily
    },
    setFontFamily (font) {
      this.setDefaultFamily(font)
      saveFontFamily(this.bookName, font)
      if (font === 'Default') {
        this.currentBook.rendition.themes.font('Times New Roman')
      } else {
        this.currentBook.rendition.themes.font(font)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global.scss';
.ebook-popup-list {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 300;
  .ebook-popup-title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: px2rem(15);
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #b8b9bb;
    &-icon {
      position: absolute;
      left: px2rem(15);
      font-size: px2rem(16);
    }
    &-text {
      font-size: px2rem(14);
    }
  }
  .ebook-popup-list-wrapper {
    .ebook-popup-item {
      display: flex;
      box-sizing: border-box;
      padding: px2rem(15);
      justify-content: space-between;
      font-size: px2rem(14);
      &-text {
        &.selected {
          color: #346cb9;
          font-weight: bold;
          & + .ebook-popup-item-select {
            display: block;
          }
        }
      }
      &-select {
        color: #346cb9;
        font-weight: bold;
        display: none;
      }
    }
  }
}
</style>
