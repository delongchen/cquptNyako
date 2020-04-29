export default {
  namespaced: true,
  state: {
    device: 'desktop',
    sidebar: true
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_SIDEBAR_TYPE: (state, type) => {
      state.sidebar = type
    }
  },
  actions: {
    setSidebar ({ commit }, type) {
      commit('SET_SIDEBAR_TYPE', type)
    },
  }
}
