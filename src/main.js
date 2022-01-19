import { createApp } from 'vue';
import { createStore } from 'vuex'
import App from './App.vue';
import router from './routes';
import moduleLocations from './store/modules/locations.js'
import moduleAuth from './store/modules/auth.js'
import moduleGroups from './store/modules/groups.js'
import moduleAuthModal from './store/modules/ui/authModal'
import moduleGroupModal from './store/modules/ui/groupModal'
import moduleGroupTypes from './store/modules/groupTypes'
import moduleSubmitGroupModal from './store/modules/ui/submitGroupModal'
import moduleRequestModal from './store/modules/ui/requestModal'
import moduleRequests from './store/modules/requests'
import { createHead } from '@vueuse/head'
const head = createHead()
import './index.css'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  modules: {
    locations: moduleLocations,
    auth: moduleAuth,
    groups: moduleGroups,
    authModal: moduleAuthModal,
    groupModal: moduleGroupModal,
    requestModal: moduleRequestModal,
    submitGroupModal: moduleSubmitGroupModal,
    groupTypes: moduleGroupTypes,
    requests: moduleRequests
  }
});

const app = createApp(App).use(router).use(store).use(head).mount('#app');


