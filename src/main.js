import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { createHead } from '@vueuse/head'
import VueGtag from "vue-gtag-next";
import { Vue3Mq } from "vue3-mq";
import { VueDapp } from 'vue-dapp'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import VueClipboard from 'vue3-clipboard'
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';

const head = createHead()
import './index.css'

createApp(App).use(VueDapp,  { appUrl: process.env.VUE_APP_URL }).use(SimpleTypeahead).use(router).use(head).use(Vue3Mq).use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
}).use(VueCollapsiblePanel).use(VueGtag, {property: {id: process.env.VUE_APP_GTAG}}).mount('#app');

