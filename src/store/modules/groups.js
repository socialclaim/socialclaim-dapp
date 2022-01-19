import axios from "axios";

export default {
  namespaced: true,
  state: {
    loading: false,
    submitted: false,
    redirect_group_id: null,
    group: {
      invite_url: '',
    },
    publicGroups: [
    ]
  },
  mutations:
      {
        GET_group(state, event) {
          state.group = event.group
        },
        GET_redirect_group(state, event) {
          state.redirect_group_id = event
        },
        ADD_public_group(state) {
          state.submitted = true;
        }
      },
  actions: {
    getGroup({ commit }, event) {
      const id = event.id
      return new Promise((resolve, reject) => {
        return axios.get(`${process.env.VUE_APP_API_URL}/groups/${event.id}?auth_type=${event.auth.type}&auth_token=${event.auth.token}`, {}).then((group) => {
          commit('GET_group', {group: group.data})
          resolve(group)
        }).catch(err => {
          commit('GET_redirect_group', id)
          reject(err);
        })
      });
    },
    createPublicGroup({ commit }, event) {
      return new Promise((resolve, reject) => {
        return axios.post(`${process.env.VUE_APP_API_URL}/groups?auth_type=${event.auth.type}&auth_token=${event.auth.token}`, event).then((group) => {
          commit('ADD_public_group', {group: group.data})
          resolve(group)
        }).catch(err => {
          reject(err);
        })
      });
    }
  }
}
