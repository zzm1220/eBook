/*
 * @Author: zhimin
 * @Date: 2021-03-26 11:22:41
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-30 16:48:29
 * @FilePath: \hello\src\utils\mixins.js
 */
import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters({
      bookName: 'fileName',
      menuVisible: 'menuVisible',
      settingVisible: 'settingVisible',
      defaultFontSize: 'defaultFontSize',
      defaultFontFamily: 'defaultFontFamily',
      fontFamilyVisible: 'fontFamilyVisible',
      currentBook: 'currentBook'
    }
    )
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
      'setDefaultFamily'
    ])
  }
}
