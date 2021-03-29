/*
 * @Author: zhimin
 * @Date: 2021-03-24 14:55:09
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-29 10:19:40
 * @FilePath: \hello\src\store\modules\books\book.js
 */
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1 不显示, 0 字号, 1:主题, 2:进度, 3:目录
    defaultFontSize: 16,
    defaultFontFamily: 'Default',
    fontFamilyVisible: false,
    currentBook: null
  },
  getters,
  actions,
  mutations
}
export default book
