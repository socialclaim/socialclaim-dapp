import axios from "axios";

export default {
  namespaced: true,
  state: {
    loading: false,
    submitted: false,
    request: {
      invite_url: '',
    },
    publicRequests: [
    ]
  },
  mutations:
      {
        ADD_request(state) {
          state.submitted = true;
        }
      },
  actions: {
    createRequest({ commit }, event) {
      return new Promise((resolve, reject) => {
        return axios.post(`${process.env.VUE_APP_API_URL}/requests?g-recaptcha-response-data=${event.recaptcha}`, {location_id: event.location_id, type: event.type, message: event.message, contact: event.contact}).then((request) => {
          console.log(request)
          commit('ADD_request', {request: request.data})
          resolve(request)
        }).catch(err => {
          reject(err);
        })
      });
    }
  }
}
