/*
 * @Author: zhimin
 * @Date: 2021-03-26 11:22:41
 * @LastEditors: zhimin
 * @LastEditTime: 2021-04-02 10:52:56
 * @FilePath: \hello\src\utils\mixins.js
 */
import { mapGetters, mapActions } from 'vuex'
import { themeList, addCss } from './book'

export const ebookMixin = {
  computed: {
    ...mapGetters({
      bookName: 'fileName',
      menuVisible: 'menuVisible',
      settingVisible: 'settingVisible',
      defaultFontSize: 'defaultFontSize',
      defaultFontFamily: 'defaultFontFamily',
      defaultTheme: 'defaultTheme',
      fontFamilyVisible: 'fontFamilyVisible',
      currentBook: 'currentBook',
      progress: 'progress',
      bookAvailable: 'bookAvailable',
      section: 'section'
    }),
    themeList () {
      return themeList(this)
    }
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuVisible',
      'hideMenuVisible',
      'setSettingVisible',
      'setDefaultVal',
      'setCurrentBook',
      'setFontFamilyVisible',
      'setDefaultFamily',
      'setDefaultTheme',
      'setBookAvailable',
      'setProgress',
      'setSection'
    ]),
    initGlobalStyle () {
      let theme = this.defaultTheme
      if (!theme) theme = 'Default'
      console.log(theme)
      console.log(`${process.env.VUE_APP_RES_URL}/theme/theme_${theme}.css`)
      addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_${theme}.css`)
    }
  }
}
