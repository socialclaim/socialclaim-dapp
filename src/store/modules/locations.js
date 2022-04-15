import axios from "axios";

export default {
  namespaced: true,
  state: {
    loading: false,
    locations: [],
    create_requests: [],
    get_locations: [],
    location: {
      slug: '',
      geonames_feature: {
        country_code: "",
        latitude: 0,
        longitude: 0,
        name: ""
      }
    }
  },
  mutations:
      {
        GET_location(state, event) {
          state.location = event.location
        },
        GET_locations(state, event) {
          state.locations = event.locations
        },
        GET_geo_locations(state, event) {
          state.geo_locations = event.locations
          state.geo_locations.forEach(function(loc){
            if (loc.picture) {
              fetch(loc.picture.service_url).then(function(blob){
                blob.blob().then(function(b){
                  loc.blob = URL.createObjectURL(b)
                })
              })
            }
          })
        },
        SET_requests() {
          // state.create_requests = state.create_requests.push({})
        },
        CLEAR_locations(state) {
          state.locations = []
        }
      },
  actions: {
    getLocation({ commit }, event) {
      return new Promise((resolve, reject) => {
        return axios.get(`${process.env.VUE_APP_API_URL}/locations/${event.slug}`, {}).then((location) => {
          console.log(location)
          commit('GET_location', {location: location.data})
          resolve(location)
        }).catch(err => {
          reject(err);
        })
      });
    },
    incrementRequests({ commit }) {
      return new Promise(() => {
        commit('SET_requests')
      });
    },
    getLocations({ commit }, event) {
      return new Promise((resolve, reject) => {
        var url = `${process.env.VUE_APP_API_URL}/locations?query=${event.query}`;
        return axios.get(url).then((locations) => {
          console.log(locations)
          commit('GET_locations', {locations: locations.data})
          resolve(locations)
        }).catch(err => {
          reject(err);
        })
      });
    },
    getDestinations({ commit }, event) {
      return new Promise((resolve, reject) => {
        var url = `${process.env.VUE_APP_API_URL}/locations?continent=${event.continent}&hot=${event.hot}&adventure=${event.adventure}&cost=${event.cost}`;
        return axios.get(url).then((locations) => {
          commit('GET_geo_locations', {locations: locations.data})
          resolve(locations)
        }).catch(err => {
          reject(err);
        })
      });
    },
    clearLocations({ commit }) {
      return new Promise(() => {
        commit('CLEAR_locations', {})
      });
    },
  }
}
