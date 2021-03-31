/*
 * @Author: zhimin
 * @Date: 2021-03-26 11:22:41
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-31 17:36:18
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
      currentBook: 'currentBook'
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
      'setDefaultTheme'
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
