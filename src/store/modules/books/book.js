/*
 * @Author: zhimin
 * @Date: 2021-03-24 14:55:09
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-24 16:05:51
 * @FilePath: \hello\src\store\modules\books\book.js
 */
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
const book = {
  state: {
    name: '计算机'
  },
  getters,
  actions,
  mutations
}
export default book
