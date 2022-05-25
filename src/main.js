import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { createHead } from '@vueuse/head'
import VueGtag from "vue-gtag-next";
import { Vue3Mq } from "vue3-mq";
import { VueDapp } from 'vue-dapp'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

const head = createHead()
import './index.css'
import store from './store'

createApp(App).use(VueDapp,  { appUrl: "https://verified.nescrypto.com" }).use(store).use(router).use(head).use(Vue3Mq).use(VueCollapsiblePanel).use(VueGtag, {property: {id: "G-Q5S6T2RX7H"}}).mount('#app');

