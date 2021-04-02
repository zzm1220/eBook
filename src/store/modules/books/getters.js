/*
 * @Author: zhimin
 * @Date: 2021-03-24 15:58:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-04-02 10:47:26
 * @FilePath: \hello\src\store\modules\books\getters.js
 */
const getters = {
  fileName: state => state.fileName,
  menuVisible: state => state.menuVisible,
  settingVisible: state => state.settingVisible,
  defaultFontSize: state => state.defaultFontSize,
  defaultFontFamily: state => state.defaultFontFamily,
  defaultTheme: state => state.defaultTheme,
  fontFamilyVisible: state => state.fontFamilyVisible,
  currentBook: state => state.currentBook,
  progress: state => state.progress,
  bookAvailable: state => state.bookAvailable,
  section: state => state.section
}
export default getters
