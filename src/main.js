import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { createHead } from '@vueuse/head'
import VueGtag from "vue-gtag-next";
import { Vue3Mq } from "vue3-mq";
import { VueDapp } from 'vue-dapp'

const head = createHead()
import './index.css'
import store from './store'

createApp(App).use(VueDapp).use(store).use(router).use(head).use(Vue3Mq).use(VueGtag, {property: {id: "G-G2L6EBMVZP"}}).mount('#app');

