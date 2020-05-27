export default {
  namespaced: true,
  state: {
    dataConfig: {
      theme: null
    }
  },
  getters: {
    currentTheme: state => {
      return state.dataConfig.theme
    }
  },
  mutations: {
    changeTheme (state, theme) {
      state.dataConfig.theme = theme
    }
  },
  actions: {
    changeTheme ({ commit }, theme) {
      commit('changeTheme', theme)
    }
  }
}
