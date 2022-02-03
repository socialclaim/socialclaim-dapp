<template>
  <Head v-if="location && location.geonames_feature">
    <title  >Digital Nomads in {{ location.geonames_feature.name }}</title>
    <html lang="en"></html>
    <meta name="description" content="All the groups and communities of digital nomads, expats, and locals">
    <!-- Social -->
    <meta property="og:title" :content="'Digital Nomads in ' + location.geonames_feature.name ">
    <meta property="og:description" content="All the groups and communities of digital nomads, expats, and locals">
    <meta v-if="location.picture" property="og:image" :content="location.picture.service_url">
    <!-- Twitter -->
    <meta name="twitter:title" :content="'Digital Nomads in ' + location.geonames_feature.name ">
    <meta name="twitter:description" content="All the groups and communities of digital nomads, expats, and locals">
    <meta v-if="location.picture" name="twitter:image" :content="location.picture.service_url">
    <meta name="twitter:card" content="summary_large_image">

  </Head>
  <dashboard-provider>
    <login-modal v-if="authModalStatus === 'opened'" :group="group" />
    <request-modal v-show="requestModalStatus === 'opened'" :location="location" />
    <div class="bg-primary-900 h-screen overflow-hidden relative" >
      <div class="flex items-start">
        <Overlay />

        <div class="flex flex-col h-screen pl-0 w-full ">
          <TopNavigation />
          <main
              class="
            h-screen
            overflow-auto
            pb-36
            pt-4
            px-2
            md:pb-8 md:pt-4
            lg:pt-0 lg:px-4
          "
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </dashboard-provider>
</template>

<script setup>
import Overlay from './provider/Overlay.vue';
import TopNavigation from './topnavigation/Index.vue';
import DashboardProvider from './provider/Provider.vue';
import LoginModal from '../components/modals/LoginModal.vue'
import RequestModal from '../components/modals/RequestModal.vue'
import { Head } from '@vueuse/head'
</script>

<script>

export default {
  data() {
    return {
      app_id: process.env.VUE_APP_FB_APP_ID,
      FB: {},
      model: {},
      scope: {}
    };
  },
  methods: {
  },
  computed: {
    authModalStatus: function() {return this.$store.state.authModal.status },
    requestModalStatus: function() {return this.$store.state.requestModal.status },
    location: function() {return this.$store.state.locations.location },
    group: function() {return this.$store.state.groups }
  },
};
</script>
<script>

</script>
