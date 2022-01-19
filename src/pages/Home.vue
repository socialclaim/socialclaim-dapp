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
  <div class="w-full h-screen bg-dunes bg-cover bg-center bg-dunes">
    <TopNavigation />
    <div class="w-full   bg-center bg-gray-900 opacity-90">
    <div class="mx-auto max-w-lg text-center ">
      <h1 class=" pt-16 text-white text-5xl font-bold">Make friends in your new city</h1>
      <div class="relative"  >
      <input v-model="query.value" id="query" v-on:input="getLocations()" type="text" class="bg-white block leading-normal pl-10 py-2.5 pr-4 mt-10 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="City Search" />
      <ul v-if="locations.length > 0" class="bg-white border absolute top-9 border-gray-100 w-full rounded-l text-black ">
      <li v-for="location in locations" :key="location.id" class="pl-3 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-800 hover:text-white">
        <router-link :to="{ name: 'Location', params: { slug: location.slug }}">
          <div class="w-full h-full" v-on:click="clearLocations()">
            <country-flag :country='location.geonames_feature.country_code' size='small'/>
            <span class="pl-4 text-lg" v-bind:class="{ 'opacity-30': location.state ===  'inactive' }">
                      <span class="font-semibold">{{location.geonames_feature.name}}</span>
                      <span v-if="location.geonames_parent_feature" class="text-sm opacity-70">
                        ({{ location.geonames_parent_feature.name }})
                      </span>
                    </span>
            <add-circle-icon v-if="location.state ===  'inactive'" class="ml-2 inline-block align-middle opacity-30" :size="16" />
          </div>
        </router-link>
      </li>
    </ul>
      </div>
      <div class="text-white w-full text-left text-md  ">
         <h2> <span class=" ml-4 underline">We reference</span> :
          <span class="">Online groups, Chats and Events</span></h2>
          <h2> <span class=" ml-4 underline">Focusing on</span> :
          <span class="">Expats, Digital Nomads & Remote Workers</span></h2>
        </div>
<!--      <ul v-if="locations.length > 0" class="bg-white border absolute top-9 border-gray-100 w-11/12 left-3 rounded-l text-white ">-->
<!--        <li v-for="location in locations" :key="location.id" class="pl-3 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-800 hover:text-white">-->
<!--          <router-link :to="{ name: 'Location', params: { slug: location.slug }}">-->
<!--            <div class="w-full h-full" v-on:click="clearLocations()">-->
<!--              <country-flag :country='location.geonames_feature.country_code' size='small'/>-->
<!--              <span class="pl-4 text-lg" v-bind:class="{ 'opacity-30': location.state ===  'inactive' }">-->
<!--                      <span class="font-semibold">{{location.geonames_feature.name}}</span>-->
<!--                      <span v-if="location.geonames_parent_feature" class="text-sm opacity-70">-->
<!--                        ({{ location.geonames_parent_feature.name }})-->
<!--                      </span>-->
<!--                    </span>-->
<!--              <add-circle-icon v-if="location.state ===  'inactive'" class="ml-2 inline-block align-middle opacity-30" :size="16" />-->
<!--            </div>-->
<!--          </router-link>-->
<!--        </li>-->
<!--      </ul>-->

<!--      <h3 class="text-white text-3xl  mt-6">By theme, </h3>-->
    </div>
    <div class=" pt-20 text-center text-white max-w-2xl mx-auto ">
          <span class="text-xl  underline">Editorial :</span>
      <p class="text-lg  italic " >Moving to a new city is hard.<br /> Studies showed that the #1 priority for all kind of settlers is to make new friends.
        With the recent changes happening to the world, more and more people started settling in places far from home,
        but the online tools available to meet new people are hard to find or very targeted.<br/>
        In today's world, most remote communities have been built for an economic purpose, either as startup business models, or ways for companies to promote their products.
        We try to offer a different vision of those concepts with a transparent pricing approach.
      </p>
        </div>

      </div>
  </div>
 </template>

<script setup>

import TopNavigation from '../dashboard/topnavigationHome/Index.vue';
import AddCircleIcon from 'vue-material-design-icons/PlusCircle.vue';
import CountryFlag from 'vue-country-flag-next'
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
