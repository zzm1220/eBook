/*
 * @Author: zhimin
 * @Date: 2021-03-24 15:58:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-29 10:20:11
 * @FilePath: \hello\src\store\modules\books\getters.js
 */
const getters = {
  fileName: state => state.fileName,
  menuVisible: state => state.menuVisible,
  settingVisible: state => state.settingVisible,
  defaultFontSize: state => state.defaultFontSize,
  defaultFontFamily: state => state.defaultFontFamily,
  fontFamilyVisible: state => state.fontFamilyVisible,
  currentBook: state => state.currentBook
}
export default getters
