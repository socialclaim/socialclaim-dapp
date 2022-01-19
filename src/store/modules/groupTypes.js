import axios from "axios";

export default {
  namespaced: true,
  state: {
    platforms: [],
    types: []
  },
  mutations:
      {
        GET_group_types(state, event) {
          state.platforms = event.platforms
          state.types = event.types
        },
      },
  actions: {
    getGroupTypes({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get(`${process.env.VUE_APP_API_URL}/group_types`, {}).then((groupTypes) => {
          commit('GET_group_types', groupTypes.data)
          resolve()
        }).catch(err => {
          reject(err);
        })
      });
    }
  }
}
