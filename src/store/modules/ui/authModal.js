export default {
  namespaced: true,
  state: {
    status: "closed"
  },
  mutations:
      {
        SET_status(state, event) {
          state.status = event;
        }
      },
  actions: {
    openModal({ commit }, event) {
      commit('SET_status', 'opened')
    },

    closeModal({ commit }, event) {
      commit('SET_status', 'closed')
    },
  }
}
