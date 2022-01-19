export default {
  namespaced: true,
  state: {
    status: "closed",
    title: "Submit your request",
    type: null,
    textInput: false
  },
  mutations:
      {
        SET_status(state, event) {
          state.status = event;
        },
        SET_title(state, event) {
          state.title = event
        },
        SET_type(state, event) {
          state.type = event
        },
        SET_text_input(state, event) {
          state.textInput = event
        }
      },
  actions: {
    openModal({ commit }, event) {
      commit('SET_status', 'opened')
    },
    setTitle({ commit }, event) {
      commit('SET_title', event.title)
    },
    setType({ commit }, event) {
      commit('SET_type', event)
    },
    setTextInput({ commit }, event) {
      commit('SET_text_input', event)
    },
    closeModal({ commit }, event) {
      commit('SET_status', 'closed')
    },
  }
}
