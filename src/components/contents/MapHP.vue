<template>
  <div class="h-full  relative">
    <div v-show="submitted === false"  class="absolute w-full h-full bg-black bg-opacity-80" style="z-index: 9000">
      <div class="mt-32 max-w-xl  mx-auto   text-3xl" >
        <div id="authentication-modal" class="overflow-y-auto overflow-x-hidden justify-center items-center h-modal md:h-full md:inset-0">
          <div class="relative px-4 w-full h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex-row items-center p-2 mx-auto w-32">
                <div class="">
                  <router-link class="relative block w-24 ml-4" :to="{name: 'Home'}"><img class=" fill-white w-20 pb-0" src="/images/logo.svg"  />
                    <div class="absolute right-0 top-0"><span class="bg-primaryLight text-sm align-bottom bg-white rounded-md px-2  font-extrabold text-primary">Beta</span>
                    </div>
                  </router-link>
                </div>
                <div class="text-sm ">Nomad|<span class="text-primary font-bold">Roulette</span></div>
              </div>
              <form class="mt-12 px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" v-on:submit.prevent="getDestinations()">
                <div>
                  <label for="continents" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your continent</label>
                  <select v-model="continent" id="continents" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Any</option>
                    <option>Africa</option>
                    <option>Europe</option>
                    <option>North America</option>
                    <option>South America </option>
                    <option>Oceania</option>
                  </select>
                </div>
                <div>
                  <label for="cost" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your cost of living: </label>
                  <select id="cost" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
                    <option>Any</option>
                    <option>Under 1000$</option>
                    <option>Under 1500$</option>
                    <option>Under 2000$</option>
                    <option>Under 2500$</option>
                  </select>
                </div>
                <div>
                  <label for="adventure" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">How adventurous do you feel ? </label>
                  <select id="adventure" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
                    <option>Get me somewhere easy</option>
                    <option>I want a little adventure</option>
                    <option>I want to be out of place</option>
                  </select>
                </div>
                <div>
                  <label for="toggle-example-checked" class="flex relative items-center mb-4 cursor-pointer">
                    <input type="checkbox" id="toggle-example-checked" class="sr-only" disabled>
                    <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Only warm countries right now</span>
                  </label>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="go" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="go" class="font-medium text-gray-900 dark:text-gray-300">I swear I will go</label>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="maybe" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" >
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="maybe" class="font-medium text-gray-900 dark:text-gray-300">Or maybe not</label>
                    </div>
                  </div>
                </div>
                <button  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get me a fresh destination !</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <l-map
        v-model:zoom="zoom"
        :center="[0, 0]"
        class="absolute"
    >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker v-for="location in mapLocations" :lat-lng="[location.geonames_feature.latitude, location.geonames_feature.longitude]" >
        <l-tooltip :options="{permanent: true}">
          <h1 class="text-xl md:text-xl font-bold">
            <span>
            <country-flag  :country='location.geonames_feature.country_code' size='normal' /></span>
            <span class="ml-2 mr-2"><span v-if="!location.geonames_alternate_name">{{ location.geonames_feature.name }}</span>
              <span v-if="location.geonames_alternate_name">{{location.geonames_alternate_name.alternate_name}}</span>, {{ location.geonames_feature.country_code }} </span>
            <span v-if="location.geonames_parent_feature && location.geonames_parent_feature.location" class="mr-2 text-sm font-light"><span class=" ">Part of  {{ location.geonames_parent_feature.name }}</span></span>
            <span v-if="location.geonames_parent_feature && !location.geonames_parent_feature.location" class="mr-2 text-sm font-light">{{ location.geonames_parent_feature.name }}</span>
          </h1>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
import CountryFlag from 'vue-country-flag-next'
</script>

<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      submitted: false,
      continent: 'Any',
      coords: this.coordinates,
      zoom: 3,
      iconWidth: 15,
      iconHeight: 30,
    };
  },
  computed: {
    mapLocations: function() {return this.$store.state.locations.geo_locations }
  },
  methods: {
    getDestinations() {
      const _self = this
      this.$store.dispatch('locations/getDestinations', this.continent).then(function(){
        _self.submitted = true
      })
    }
  }
};
</script>
