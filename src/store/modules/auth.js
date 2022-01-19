import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: {
    }
    },
  mutations:
      {
        SET_token(state, event) {
          state.token = event;
        },
        CHECK_token() {
        },
      },
  actions: {
    setToken({ commit }, event) {
      return new Promise(() => {
        commit('SET_token', event)
      });
    },
    checkToken({ commit }, event) {
      return new Promise((resolve, reject) => {
        return axios.get(`${process.env.VUE_APP_API_URL}/invites/${event.auth_token}`, {}).then((valid) => {
          resolve(valid.data)
          commit()
        }).catch(err => {
          reject(err);
        })
      });
    }
  }
}
