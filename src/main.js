/*
 * @Author: zhimin
 * @Date: 2021-03-23 17:42:50
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-31 10:07:38
 * @FilePath: \hello\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import './assets/styles/global.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
