<!--
 * @Author: zhimin
 * @Date: 2021-04-01 09:32:09
 * @LastEditors: zhimin
 * @LastEditTime: 2021-04-02 11:18:55
 * @FilePath: \hello\src\components\ebook\EbookSettingProgress.vue
-->
<template>
  <transition>
    <div
      class="setting-wrapper"
      v-show="menuVisible&&settingVisible===2"
    >
      <div class="setting-progress">
        <div class="read-time-wrapper">
          <span class="read-time-text">111</span>
          <span class="icon icon-forward">&#xe605;</span>
        </div>
        <div
          class="progress-wrapper"
          v-show="bookAvailable"
        >
          <div
            class="progress-icon-wrapper"
            @click="prevSection()"
          >
            <span class="icon icon-back">&#xe6db;</span>
          </div>
          <input
            class="progress"
            type="range"
            max="100"
            min="0"
            step="1"
            @change="onProgressChange($event.target.value)"
            @input="onProgressInput($event.target.value)"
            :value="progress"
            :disabled="!bookAvailable"
            :style="{'background-size': `${progress}% 100% !important`}"
            ref="progress"
          >
          <div
            class="progress-icon-wrapper"
            @click="nextSection()"
          >
            <span class="icon icon-next">&#xe605;</span>
          </div>
        </div>
        <div class="progress-percent-wrapper">
          <span>{{progress}}%</span>
        </div>
        <div
          class="text-wrapper"
          v-if="!bookAvailable"
        >
          加载中...
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixins'
export default {
  mixins: [ebookMixin],
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    // 进度条拖动松手调用方法
    onProgressChange (progress) {
      // const percentage = progress / 100
      console.log(progress)
      this.setProgress(progress).then(() => {
        this.displayProgress()
        // this.updateProgressBg()
      })
    },
    // 进度条拖到过程中调用方法
    onProgressInput (progress) {
      this.setProgress(progress)
    },
    // 切换到上一章
    prevSection () {
      if (this.bookAvailable && this.section > 0) {
        this.setSection(this.section - 1).then(() => {
          this.setSection(this.section - 1).then(() => {
            this.displaySection()
          })
        })
      }
    },
    // 切换到下一章
    nextSection () {
      console.log(this.currentBook.spine)
      if (this.bookAvailable && this.section < (this.currentBook.spine.length - 1)) {
        this.setSection(this.section + 1).then(() => {
          this.displaySection()
        })
      }
    },
    displaySection () {
      const sectionInfo = this.currentBook.section(this.section)
      if (sectionInfo && sectionInfo.href) {
        this.currentBook.rendition.display(sectionInfo.href)
      }
    },
    displayProgress () {
      const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
      console.log(cfi)
      this.currentBook.rendition.display(cfi)
    },
    refreshLocation () {

    }
    // updateProgressBg () {
    //   this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
    // }
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
  .setting-progress {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .read-time-wrapper {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: px2rem(14);
    }
    .progress-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0 px2rem(15);
      .progress-icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 px2rem(10);
        color: #666;
      }
      .progress {
        width: 100%;
        -webkit-appearance: none;
        height: px2rem(2);
        // background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
        // background-size: 0 100% !important;
        &:focus {
          outline: none;
        }
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: px2rem(20);
          width: px2rem(20);
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #ddd;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
        }
      }
    }
    .progress-percent-wrapper {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: px2rem(14);
    }
    .text-wrapper {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: px2rem(14);
      text-align: center;
    }
  }
}
</style>
