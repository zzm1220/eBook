<!--
 * @Author: zhimin
 * @Date: 2021-03-24 17:37:45
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-29 15:50:23
 * @FilePath: \hello\src\components\ebook\EbookReader.vue
-->
<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixins'
import Epub from 'epubjs'
export default {
  data () {
    return {
      bookUrl: '',
      book: null
    }
  },
  computed: {
  },
  mixins: [ebookMixin],
  props: [
    'fileName'
  ],
  created () {

  },
  mounted () {
    console.log(this.fileName)
    const fileName = this.fileName.split('|').join('/')
    this.setFileName(fileName).then(() => {
      this.initEpub()
    })
  },
  methods: {
    initEpub () {
      const baseUrl = `${process.env.VUE_APP_RES_URL}/epub/`
      this.bookUrl = baseUrl + this.bookName + '.epub'
      console.log(this.bookUrl)
      this.book = new Epub(this.bookUrl)
      this.setCurrentBook(this.book)
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
      this.rendition.display()
      this.rendition.on('touchstart', event => {
        console.log(event)
        this.touchStartX = event.changedTouches[0].clientX
        this.timeStamp = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const time = event.timeStamp - this.timeStamp
        if (time < 500 && offsetX > 40) {
          this.nextPage()
        } else if (time < 500 && offsetX < -40) {
          this.prevPage()
        } else {
          this.toggleTitleAndMenu()
        }
      })
      this.rendition.hooks.content.register(contents => {
        contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`)
        contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`)
        contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`)
        contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
      })
    },
    prevPage () {
      console.log('prevPage')
      this.rendition && this.rendition.prev()
      this.hideTitleAndMenu()
    },
    nextPage () {
      console.log('nextPage')
      this.rendition && this.rendition.next()
      this.hideTitleAndMenu()
    },
    toggleTitleAndMenu () {
      if (this.menuVisible) {
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      }
      this.setMenuVisible()
    },
    hideTitleAndMenu () {
      this.hideMenuVisible()
      this.setSettingVisible(-1)
      this.setFontFamilyVisible(false)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
