/*
 * @Author: zhimin
 * @Date: 2021-03-23 17:42:50
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-24 13:52:06
 * @FilePath: \hello\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/global.scss'
import './assets/styles/font.scss'
import './assets/fonts/daysOne.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
