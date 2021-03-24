/*
 * @Author: zhimin
 * @Date: 2021-03-24 16:03:59
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-24 16:05:15
 * @FilePath: \hello\src\store\modules\books\actions.js
 */
const actions = {
  setName: ({ commit, state }, name) => {
    commit('SET_NAME', { name })
  }
}
export default actions
