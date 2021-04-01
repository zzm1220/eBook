<!--
 * @Author: zhimin
 * @Date: 2021-04-01 09:32:09
 * @LastEditors: zhimin
 * @LastEditTime: 2021-04-01 11:22:21
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
          <div class="progress-icon-wrapper">
            <span
              class="icon icon-back"
              @click="prevSection()"
            >&#xe6db;</span>
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
            ref="progress"
          >
          <div class="progress-icon-wrapper">
            <span
              class="icon icon-next"
              @click="nextSection()"
            >&#xe605;</span>
          </div>
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
    onProgressChange (value) {
      // const percentage = progress / 100
      console.log(value)
    },
    // 进度条拖到过程中调用方法
    onProgressInput (value) {
      console.log(value)
    },
    prevSection () {

    },
    nextSection () {

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
        background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
        background-size: 0 100% !important;
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
