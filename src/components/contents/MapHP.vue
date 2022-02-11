<template>
  <div class="h-full  relative" v-if="continent">
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
                      <option v-for="option in continentOptions" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                </div>
                <div>
                  <label for="cost" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your cost of living: </label>
                  <select id="cost" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                    <option v-for="option in costOptions" v-bind:value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="adventure" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">How adventurous do you feel ? </label>
                  <select v-model="adventure" id="adventure" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                    <option v-for="option in adventureOptions" v-bind:value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="toggle-example-checked" class="flex relative items-center mb-4 cursor-pointer">
                    <input type="checkbox" id="toggle-example-checked" class="sr-only" v-model="hot">
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
                <div v-show="error == true" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                  <span class="font-medium">No results for your search</span> Try to broaden your criterias
                </div>
                <button  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get me a fresh destination !</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="submitted === true && found === false"  class="absolute w-full h-full opacity-80" style="z-index: 9000">
      <div class="mt-32 max-w-xl  mx-auto   text-3xl" >
        <div id="authentication-modal" class="overflow-y-auto overflow-x-hidden justify-center items-center h-modal md:h-full md:inset-0">
          <div class="relative px-4 w-full h-full md:h-auto">
            <!-- Modal content -->
            <Vue3Lottie  :animationData="Roulette" :width="640" />
          </div>
        </div>
      </div>
    </div>


    <div  v-if="found === true"  class="absolute w-full h-full" style="z-index: 9000">
      <div class="mt-10 max-w-xl  mx-auto   text-3xl" >
        <div id="authentication-modal" class="overflow-y-auto overflow-x-hidden justify-center items-center h-modal md:h-full md:inset-0">
          <div class="relative px-4 w-full h-full md:h-auto">



            <div class="max-w-sm text-white rounded-lg px-4 py-4 mx-6 mb-4 bg-cover bg-center bg-gradient-to-b " :style="{'background-image': `url(${locations[0].picture.service_url})`}">
<!--              <a href="#">-->
<!--                <img class="p-8 rounded-t-lg" :src="locations[0].picture.service_url" alt="product image" />-->
<!--              </a>-->
              <div class="px-5 pb-5 bg-black bg-opacity-40  rounded-3xl" v-if="locations[0]">
                  <h3 class="text-xl font-semibold tracking-tight text-white text-center pt-5">You are going to :<br /><span class="ml-2 mr-2 text-2xl"><span v-if="!locations[0].geonames_alternate_name">{{ locations[0].geonames_feature.name }} !</span>
              <span v-if="locations[0].geonames_alternate_name">{{locations[0].geonames_alternate_name.alternate_name}} !</span></span>
                    <span v-if="locations[0].geonames_parent_feature && locations[0].geonames_parent_feature.locations[0]" class="mr-2 text-sm font-light"><span class=" ">Part of  {{ locations[0].geonames_parent_feature.name }}</span></span>
                    <span v-if="locations[0].geonames_parent_feature && !locations[0].geonames_parent_feature.locations[0]" class="mr-2 text-sm font-light">{{ locations[0].geonames_parent_feature.name }}</span></h3>
<!--                <div class="flex items-center mt-2.5 mb-5">-->
<!--                  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>-->
<!--                  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>-->
<!--                  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>-->
<!--                  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>-->
<!--                  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>-->
<!--                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>-->
<!--                </div>-->
                <div class="flex justify-between items-center mt-5">
                  <a href="https://flights.google.com" class="text-white bg-primary hover:bg-primaryLight focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book a flight</a>

                  <a :href="'https://nomadgroups.io/'+locations[0].slug" class="text-white bg-primary hover:bg-primaryLight focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find nomads there</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <l-map
        v-model:zoom="zoom"
        :center="center"
        class="absolute"
    >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker v-for="location in locations" :lat-lng="[location.geonames_feature.latitude, location.geonames_feature.longitude]" >
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
import Vue3Lottie from 'vue3-lottie'
import Roulette from '@/assets/animation.json'
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
      locations: [],
      Roulette,
      adventureOptions: [
        {text: 'Get me somewhere easy', value: 'easy'},
        {text: 'I want a little adventure', value: 'medium'},
        {text: 'I want to be out of place', value: 'hard'}
        ],
      costOptions: [
        {text: 'Any', value: 'Any'},
        {text: 'Under 1000$', value: '1000'},
        {text: 'Under 1500$', value: '1500'},
        {text: 'Under 2000$', value: '2000'},
        {text: 'Under 2500$', value: '2500'},
        {text: 'Under 3000$', value: '3000'},
        {text: 'Under 4000$', value: '4000'}
      ],
      continentOptions: [
        {text: 'Any', value: 'Any'},
        {text: 'Africa', value: 'Africa'},
        {text: 'European continent', value: 'Europe'},
        {text: 'North America', value: 'North America'},
        {text: 'South America', value: 'South America'},
        {text: 'Oceania', value: 'Oceania'}
      ],
      submitted: false,
      found: false,
      error: false,
      hot: false,
      cost: 'Any',
      adventure: 'easy',
      continent: 'Any',
      coords: this.coordinates,
      center: [0, 0],
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
      this.$store.dispatch('locations/getDestinations', {continent: this.continent, hot: this.hot, cost: this.cost, adventure: this.adventure}).then(function(){
        if (_self.mapLocations.length > 0) {
          setTimeout(function(){
            _self.found = true
            _self.center = [_self.locations[0].geonames_feature.latitude + 1.7, _self.locations[0].geonames_feature.longitude]
            setTimeout(function(){
              _self.zoom = 6
            }, 1000)
          }, 5000)
          const display = s => _self.locations = [s];
          const delayLoop = (fn, delay) => {
            return (name, i) => {
              setTimeout(() => {
                display(name);
              }, i * (300+20*i));
            }
          };
          _self.mapLocations.forEach(delayLoop(display, 1000));
        _self.error = false
          _self.submitted = true
        } else {
          _self.error = true
        }
      })
    }
  }
};
</script>
