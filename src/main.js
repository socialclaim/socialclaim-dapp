import { createApp } from 'vue';
import { createStore } from 'vuex'
import App from './App.vue';
import router from './routes';
import moduleWeb3 from './store/modules/web3.js'
import { createHead } from '@vueuse/head'
import VueGtag from "vue-gtag-next";
import { Vue3Mq } from "vue3-mq";

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
    web3: moduleWeb3
  }
});

const app = createApp(App).use(router).use(store).use(head).use(Vue3Mq).use(VueGtag, {property: {id: "G-G2L6EBMVZP"}}).mount('#app');


