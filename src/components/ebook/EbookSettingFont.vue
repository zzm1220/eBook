<!--
 * @Author: zhimin
 * @Date: 2021-03-26 14:12:55
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-29 10:25:57
 * @FilePath: \hello\src\components\ebook\EbookSettingFont.vue
-->
<template>
  <transition name="slide-up">
    <div
      class="setting-wrapper"
      v-show="menuVisible&&settingVisible===0"
    >
      <div class="setting-font-size">
        <div
          class="preview"
          :style="{fontSize:fontSizeList[0].FontSize +'px'}"
        >A</div>
        <div class="select">
          <div
            class="select-wrapper"
            v-for="(item,index) in fontSizeList"
            :key="index"
            @click="setFontSize(item.FontSize)"
          >
            <div class="line"></div>
            <div class="pointer-wrapper">
              <div
                class="point"
                v-show="defaultFontSize==item.FontSize"
              >
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div
          class="preview"
          :style="{fontSize:fontSizeList[fontSizeList.length-1].FontSize +'px'}"
        >A</div>
      </div>
      <div
        class="setting-font-family"
        @click="showFontFamilyPopup"
      >
        <div class="setting-font-family-text-wrapper">
          <span class="setting-font-family-text">
            {{defaultFontFamily}}
          </span>
        </div>
        <div class="setting-font-family-icon-wrapper">
          <span class="icon">&#xe605;</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixins'
import { FONT_SIZE_LIST } from '../../utils/book'
export default {
  data () {
    return {
      fontSizeList: FONT_SIZE_LIST
    }
  },
  mixins: [ebookMixin],
  created () {

  },
  mounted () {

  },
  methods: {
    setFontSize (fontSize) {
      console.log(fontSize)
      this.setDefaultVal(fontSize)
      this.currentBook.rendition.themes.fontSize(fontSize)
    },
    showFontFamilyPopup () {
      this.setFontFamilyVisible(true)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global.scss';
.setting-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  right: 0;
  width: 100%;
  height: px2rem(90);
  background: #ffffff;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  z-index: 199;
  .setting-font-size {
    flex: 2;
    height: 100%;
    display: flex;
    align-items: center;
    .preview {
      flex: 0 0 px2rem(40);
      text-align: center;
    }
    .select {
      flex: 1;
      display: flex;
      .select-wrapper {
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        .line {
          flex: 1;
          height: 0;
          border-top: px2rem(1) solid #ccc;
        }
        .pointer-wrapper {
          position: relative;
          flex: 0 0 0;
          width: 0;
          height: px2rem(7);
          border-left: px2rem(1) solid #ccc;
          .point {
            position: absolute;
            top: px2rem(-8);
            left: px2rem(-8);
            display: flex;
            justify-content: center;
            align-items: center;
            width: px2rem(20);
            height: px2rem(20);
            border-radius: 50%;
            background: #ffffff;
            border: px2rem(1) solid #ccc;
            box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, 0.15);
            .small-point {
              width: px2rem(5);
              height: px2rem(5);
              background: #000000;
              border-radius: 50%;
            }
          }
        }
        &:first-child {
          .line {
            &:first-child {
              border-top: none;
            }
          }
        }
        &:last-child {
          .line {
            &:last-child {
              border-top: none;
            }
          }
        }
      }
    }
  }
  .setting-font-family {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: px2rem(14);
    &-text-wrapper {
      text-align: center;
    }
  }
}
</style>
