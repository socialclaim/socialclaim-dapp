<template>
  <div class="h-full  relative" >
    <div v-show="submitted === false"  class="absolute w-full h-full bg-black bg-opacity-80" style="z-index: 9000">
      <div class="md:mt-8 max-w-xl  mx-auto   text-3xl" >
        <div  class="overflow-y-auto overflow-x-hidden justify-center items-center h-modal md:h-full md:inset-0">
          <div class="relative px-4 w-full h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex-row items-center p-2 mx-auto w-32">
                <div class="">
                  <router-link class="relative ml-10 block w-8 md:w-24 md:ml-4" :to="{name: 'Home'}"><img class=" fill-white w-20 pb-0" src="/images/logo.svg"  />
                    <div class="hidden md:block absolute right-0 top-0"><span class=" bg-primaryLight text-sm align-bottom bg-white rounded-md px-2  font-extrabold text-primary">Beta</span>
                    </div>
                  </router-link>
                </div>
                <div class="text-sm ">Nomad|<span class="text-primary font-bold">Roulette</span></div>
              </div>
              <form class="mt-4 md:mt-12 px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" v-on:submit.prevent="getDestinations()">
                <div>
                  <label  class="block md:mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your continent:</label>
                  <select id="continent" v-model="continent"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="option in continentOptions" :value="option.value" :key="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div>
                  <label  class="block md:mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your cost of living: </label>
                  <select v-model="cost"  id="cost" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                    <option v-for="option in costOptions" v-bind:value="option.value" :key="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block md:mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">How adventurous do you feel ? </label>
                  <select v-model="adventure" id="adventure" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                    <option v-for="option in adventureOptions" v-bind:value="option.value" :key="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div>
                  <label  class="flex relative items-center mb-4 cursor-pointer">
                    <input type="checkbox" id="hot" class="sr-only" v-model="hot">
                    <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Only warm countries <span class="hidden md:inline">right now</span></span>
                  </label>
                </div>
                <div class="hidden md:block">
                  <label  class="flex relative items-center mb-4 cursor-pointer">
                    <input type="checkbox" id="open" class="sr-only" v-model="open" disabled>
                    <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Opened to tourists (COVID19) <span class="text-xs text-gray-500">* Coming soon</span></span>
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
                <div v-show="error === true" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
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
        <div class="overflow-y-auto overflow-x-hidden justify-center items-center h-modal md:h-full md:inset-0">
          <div class="relative px-4 w-full md:h-auto">
            <!-- Modal content -->
            <Vue3Lottie class="md:hidden" :animationData="RouletteSM" :width="320" />
            <Vue3Lottie class="hidden md:block" :animationData="Roulette" :width="640" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="found === true" class="absolute w-full h-full" style="z-index: 9000">
      <div class="mt-10 max-w-xl mx-auto text-3xl" >
        <div id="authentication-modal" class="overflow-y-auto overflow-x-hidden justify-center items-center h-modal md:h-full md:inset-0">
          <div class="relative px-4 w-full h-full md:h-auto">
            <div class="max-w-sm text-white rounded-xl  mx-6 mb-4 bg-gray-300 " v-if="locations[0]" :style="{'background-image': (locations[0].blob ? `url(${locations[0].blob})` : '')}">
              <!--              <a href="#">-->
              <!--                <img class="p-8 rounded-t-lg" :src="locations[0].picture.service_url" alt="product image" />-->
              <!--              </a>-->
              <div class="px-2 pb-2 bg-black bg-opacity-40  rounded-t-xl" v-if="locations[0]">
                <h3 class="text-xl font-semibold tracking-tight text-white text-center pt-2">You are going to :<br /><span class="ml-2 mr-2 text-2xl"><span v-if="!locations[0].geonames_alternate_name">{{ locations[0].geonames_feature.name }} !</span>
              <span v-if="locations[0].geonames_alternate_name">{{locations[0].geonames_alternate_name.alternate_name}} !</span></span>
                  <span v-if="locations[0].geonames_parent_feature && locations[0].geonames_parent_feature.locations[0]" class="mr-2 text-sm font-light"><span class=" ">Part of  {{ locations[0].geonames_parent_feature.name }}</span></span>
                  <span v-if="locations[0].geonames_parent_feature && !locations[0].geonames_parent_feature.locations[0]" class="mr-2 text-sm font-light">{{ locations[0].geonames_parent_feature.name }}</span>
                  <span class="inline-block inline-flex">
                  <thermometer-icon :size="20"  :fill-color="temp.value > 20 ? '#ff0000' : temp.value > 10 ? '#ff6900' : '#4bbcde'" class="block pt-1"/>
                  <span class="block text-xl " :style="{color: temp.value > 20 ? '#ff0000' : temp.value > 10 ? '#ff6900' : '#4bbcde'}">{{temp.value}}</span>
                  <temperature-celsius-icon :size="20"  :fill-color="temp.value > 20 ? '#ff0000' : temp.value > 10 ? '#ff6900' : '#4bbcde'" class="block pt-1"/>
                </span>
                </h3>

              </div>
                <div class="grid grid-rows-2 gap-2 md:flex justify-between items-center mt-2 md:mt-5 mx-5">
                  <a :href="'https://nomadgroups.io/'+locations[0].slug" class="text-white bg-primary hover:bg-primaryLight focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">🔎 Find nomads there</a>
                  <a href="https://calendly.com/nomadroulette/" class="text-white bg-primary hover:bg-primaryLight focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">👄 Give feedback</a>
                </div>
              <div >

                <form class="grid grid rows-2 md:inline-flex items-center mx-auto pt-2 mt-2 md:pt-0 md:mt-8 bg-primary w-full px-2 bg-opacity-80 rounded-b-xl" v-on:submit.prevent="reRoll()">
                  <button class="block text-white bg-blue-500 hover:bg-primaryLight focus:ring-4 focus:ring-blue-300 font-medium rounded-lg align-middle text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img class="inline fill-white w-6 pb-0 mr-2" src="/images/logo.svg"  />
                    <span class="mt-2">Roll again !</span>
                  </button>

                  <div class="pt-2 md:pt-5 md:ml-4">
                    <label  class="flex relative items-center mb-2 md:mb-4 cursor-pointer">
                      <input type="checkbox" id="same" class="sr-only" v-model="same" >
                      <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                      <span class="ml-3 text-sm font-medium ">Same criterias</span>
                    </label>
                  </div>
                </form>
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
      <l-marker v-for="location in locations" :lat-lng="[location.geonames_feature.latitude, location.geonames_feature.longitude]" :key="location.id" >
        <l-tooltip :options="{permanent: true}" :style="{'background-image': (location.blob ? `url(${location.blob})` : '')}" class="rounded-md h-24 bg-cover bg-center align-middle">
          <div class="w-full h-full bg-black bg-opacity-20 rounded-md">
            <h1 class="text-xl md:text-xl font-bold ml-4 pt-6 text-white ">
            <span >
            <country-flag  :country='location.geonames_feature.country_code' size='normal' /></span>
              <span class="p-4 ml-2 mr-2"><span v-if="!location.geonames_alternate_name">{{ location.geonames_feature.name }}</span>
              <span v-if="location.geonames_alternate_name">{{location.geonames_alternate_name.alternate_name}}</span>, {{ location.geonames_feature.country_code }} </span>
              <span v-if="location.geonames_parent_feature && location.geonames_parent_feature.location" class="mr-2 text-sm font-light"><span class=" ">Part of  {{ location.geonames_parent_feature.name }}</span></span>
              <span v-if="location.geonames_parent_feature && !location.geonames_parent_feature.location" class="mr-2 text-sm font-light">{{ location.geonames_parent_feature.name }}</span>
            </h1>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import CountryFlag from 'vue-country-flag-next'
import Vue3Lottie from 'vue3-lottie'
import Roulette from '@/assets/animation.json'
import RouletteSM from '@/assets/animation-sm.json'
import ThermometerIcon from "vue-material-design-icons/Thermometer.vue";
import TemperatureCelsiusIcon from "vue-material-design-icons/TemperatureCelsius.vue";
import { useMq } from "vue3-mq";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    CountryFlag,
    Vue3Lottie,
    ThermometerIcon,
    TemperatureCelsiusIcon
  },
  data() {
    return {
      locations: [],
      Roulette,
      RouletteSM,
      adventureOptions: [
        {text: 'Get me somewhere easy', value: 'easy'},
        {text: 'I want a little adventure', value: 'medium'},
        {text: 'No other nomads, please', value: 'hard'}
      ],
      costOptions: [
        {text: 'Any', value: 'Any'},
        {text: 'Under 4000$', value: '4000'},
        {text: 'Under 3000$', value: '3000'},
        {text: 'Under 2500$', value: '2500'},
        {text: 'Under 2000$', value: '2000'},
        {text: 'Under 1500$', value: '1500'},
        {text: 'Under 1000$', value: '1000'},
      ],
      continentOptions: [
        {text: 'Any', value: 'Any'},
        {text: 'Africa', value: 'Africa'},
        {text: 'Asia', value: 'Asia'},
        {text: 'European continent', value: 'Europe'},
        {text: 'North America', value: 'North America'},
        {text: 'South America', value: 'South America'},
        {text: 'Oceania', value: 'Oceania'}
      ],
      submitted: false,
      found: false,
      error: false,
      hot: false,
      temp: null,
      cost: 'Any',
      adventure:  'easy',
      continent: 'Any',
      coords: this.coordinates,
      center: [0, 0],
      zoom: 3,
      zoomInit: 3,
      iconWidth: 15,
      iconHeight: 30,
      same: false
    };
  },
  created() {
    const mq = useMq();
    this.zoom = mq.mdMinus ? 1 : 3
    this.zoomInit = mq.mdMinus ? 1 : 3
  },
  computed: {
    mapLocations: function() {return this.$store.state.locations.geo_locations }
  },
  methods: {
    reRoll() {
      this.zoom = this.zoomInit
      this.center = [0, 0]
      this.found = false
        if (this.same === true) {
          this.submitted = true
          this.getDestinations()
        } else {
          this.submitted = false
        }
    },
    getDestinations() {

      const _self = this
      this.$store.dispatch('locations/getDestinations', {continent: this.continent, hot: this.hot, cost: this.cost, adventure: this.adventure}).then(function(){
        if (_self.mapLocations.length > 0) {
          setTimeout(function(){
            _self.found = true
            const shortMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
            const month = shortMonths[new Date().getMonth()];
            _self.temp = _self.locations[0].infos.find(function(l){ return l.key === `nomadlist_${month}_temp`})
            _self.center = [_self.locations[0].geonames_feature.latitude + 1.7, _self.locations[0].geonames_feature.longitude - 2.4]
            setTimeout(function(){
              _self.zoom = 6
            }, 1000)
          }, 5000)
          const display = s => _self.locations = [s];
          const delayLoop = () => {
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
