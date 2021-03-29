/*
 * @Author: zhimin
 * @Date: 2021-03-24 16:03:59
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-29 10:26:25
 * @FilePath: \hello\src\store\modules\books\actions.js
 */
const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', {
      fileName
    })
  },
  setMenuVisible: ({ commit }) => {
    return commit('SET_MENUVISIBLE')
  },
  hideMenuVisible: ({ commit }) => {
    return commit('HIDE_MENUVISIBLE')
  },
  setSettingVisible: ({ commit }, settingVal) => {
    return commit('SET_SETTINGVISIBLE', {
      settingVal
    })
  },
  setDefaultVal: ({ commit }, defaultVal) => {
    return commit('SET_DEFAULTFONTSIZE', {
      defaultVal
    })
  },
  setDefaultFamily: ({ commit }, defaultVal) => {
    return commit('SET_DEFAULTFONTFAMILY', {
      defaultVal
    })
  },
  setFontFamilyVisible: ({ commit }, isVisible) => {
    return commit('SET_FONTFAMILYVISIBLE', {
      isVisible
    })
  },
  setCurrentBook: ({ commit }, currentBook) => {
    return commit('SET_CURRENT_BOOK', {
      currentBook
    })
  }
}
export default actions
