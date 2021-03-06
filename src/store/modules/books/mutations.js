/*
 * @Author: zhimin
 * @Date: 2021-03-24 16:03:46
 * @LastEditors: zhimin
 * @LastEditTime: 2021-04-02 10:51:10
 * @FilePath: \hello\src\store\modules\books\mutations.js
 */
const mutations = {
  SET_FILENAME: (state, { fileName }) => {
    state.fileName = fileName
  },
  SET_MENUVISIBLE: state => {
    state.menuVisible = !state.menuVisible
  },
  HIDE_MENUVISIBLE: state => {
    state.menuVisible = false
  },
  SET_SETTINGVISIBLE: (state, { settingVal }) => {
    state.settingVisible = settingVal
  },
  SET_DEFAULTFONTSIZE: (state, { defaultVal }) => {
    state.defaultFontSize = defaultVal
  },
  SET_DEFAULTTHEME: (state, { theme }) => {
    state.defaultTheme = theme
  },
  SET_CURRENT_BOOK: (state, { currentBook }) => {
    state.currentBook = currentBook
  },
  SET_DEFAULTFONTFAMILY: (state, { defaultVal }) => {
    state.defaultFontFamily = defaultVal
  },
  SET_FONTFAMILYVISIBLE: (state, { isVisible }) => {
    state.fontFamilyVisible = isVisible
  },
  SET_PROGRESS: (state, { progress }) => {
    state.progress = progress
  },
  SET_BOOKAVAILABLE: (state, { bookAvailable }) => {
    state.bookAvailable = bookAvailable
  },
  SET_SECTION: (state, { section }) => {
    state.section = section
  }
}
export default mutations
