import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/books/book'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 1
  },
  modules: {
    book
  }
})
