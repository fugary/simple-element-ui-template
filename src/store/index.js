import Vue from 'vue'
import Vuex from 'vuex'
import ThemeStore from './ThemeStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Theme: ThemeStore
  }
})
