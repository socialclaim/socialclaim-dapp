<template>
  <Head>
    <title>Make friends in your new city</title>
    <html lang="en"></html>
    <meta name="description" content="All the groups and communities of digital nomads, expats, and locals">
    <!-- Social -->
    <meta property="og:title" :content="'Make friends in your new city'">
    <meta property="og:description" content="All the groups and communities of digital nomads, expats, and locals">
    <meta property="og:image" content="https://i.imgur.com/ziGWszn.png">
    <!-- Twitter -->
    <meta name="twitter:title" content="Make friends in your new city">
    <meta name="twitter:description" content="All the groups and communities of digital nomads, expats, and locals">
    <meta name="twitter:image" content="https://i.imgur.com/ziGWszn.png">
    <meta name="twitter:card" content="summary_large_image">
  </Head>
  <div class="w-full h-screen ">
    <div class="w-full bg-center bg-primary bg-opacity-50 h-screen">
      <mapHP />
      </div>
  </div>
 </template>

<script setup>

import TopNavigation from '../dashboard/topnavigationHome/Index.vue';
import AddCircleIcon from 'vue-material-design-icons/PlusCircle.vue';
import CountryFlag from 'vue-country-flag-next'
import MapHP from "../components/contents/MapHP"
import { Head } from '@vueuse/head'
</script>
<script>
export default {
  data() {
    return {
    query: {value: ''}
    }
  },
  computed: {
    locations: function() {return this.$store.state.locations.locations }
  },
  methods: {
    getLocations() {
      this.$store.dispatch('locations/getLocations', {query: this.query.value})
    },
    clearLocations() {
      this.query.value = ''
      this.$store.dispatch('locations/clearLocations')
    },
  }
}
</script>
