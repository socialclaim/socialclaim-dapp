<template>
  <Head>
    <title>Find your next nomad destination</title>
    <html lang="en"></html>
    <meta name="description" content="Set some basic criterias, and let chance decide what your next destination will be !">
    <!-- Social -->
    <meta property="og:title" :content="'Find your next nomad destination'">
    <meta property="og:description" content="Set some basic criterias, and let chance decide what your next destination will be !">
    <meta property="og:image" content="https://i.imgur.com/NcSeNdc.png">
    <!-- Twitter -->
    <meta name="twitter:title" content="Find your next nomad destination">
    <meta name="twitter:description" content="Set some basic criterias, and let chance decide what your next destination will be !">
    <meta name="twitter:image" content="https://i.imgur.com/NcSeNdc.png">
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
