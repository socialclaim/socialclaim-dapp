<template>
  <header class="h-20 items-center relative z-10">
    <div
      class="
        flex flex-center flex-col
        h-full
        justify-center
        mx-auto
        relative
        px-3
        text-white
        z-10
      "
    >
      <div
        class="
          flex
          items-center
          pl-1
          relative
          w-full
          sm:ml-0 sm:pr-2
          lg:max-w-68
        "
      >
        <router-link :to="{name: 'Home'}">
          <img class=" w-16 md:w-auto fill-white" src="/images/logo.svg"  />
        </router-link>
        <div class="container flex left-0 relative w-3/4">
          <div
            class="
              group
              items-center
              ml-8
              relative
              w-full
              md:flex
              lg:w-72
            "
          >
            <div
              class="
                absolute
                block
                cursor-pointer
                flex
                items-center
                justify-center
                h-10
                p-3
                pr-2
                text-gray-500 text-sm
                uppercase
                w-auto
                sm:hidden
              "
            >
              <svg
                fill="none"
                class="h-5 relative w-5 hidden"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <svg
              class="
                absolute
                fill-current
                h-4
                hidden
                left-0
                ml-4
                pointer-events-none
                text-gray-500
                w-4
                group-hover:text-gray-400

              "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
            <input
                id="query"
                v-model="query.value"
                @input="getLocations()"
              type="text"
              class="
                bg-gray-800
                block
                leading-normal
                md:pl-10
                pl-2
                py-1.5
                pr-4
                ring-opacity-90
                rounded-2xl
                text-gray-400
                w-full
                focus:border-transparent
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              placeholder="Search"
            />
            <ul v-if="locations.length > 0" class="bg-white border absolute top-9 border-gray-100 w-11/12 left-3 rounded-l text-black ">
              <li v-for="location in locations" :key="location.id" class="pl-3 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-800 hover:text-white">
                <router-link :to="{ name: 'Location', params: { slug: location.slug }}">
                  <div class="w-full h-full" v-on:click="clearLocations()">
                    <country-flag :country='location.geonames_feature.country_code' size='small'/>
                    <span class="pl-4 text-xs md:text-lg" v-bind:class="{ 'opacity-30': location.state ===  'inactive' }">
                      <span v-if="!location.geonames_alternate_name" class="font-semibold">{{location.geonames_feature.name}}</span>
                      <span v-if="location.geonames_alternate_name" class="font-semibold">{{location.geonames_alternate_name.alternate_name}}</span>
                      <span v-if="location.geonames_parent_feature" class="text-sm opacity-70">
                        ({{ location.geonames_parent_feature.name }})
                      </span>
                    </span>
                    <add-circle-icon v-if="location.state ===  'inactive'" class="ml-2 inline-block align-middle opacity-30" :size="16" />
                  </div>
                </router-link>
              </li>
              <li class="text-xs md:text-sm opacity-70 font-semibold text-gray-400  pl-3 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-800 hover:text-white">
                <a v-on:click="openRequestModalSuggest()">You city not in the list ? Request it !</a>
              </li>
            </ul>

          </div>
        </div>
        <div
          class="
          hidden
            md:flex
            items-center
            justify-end
            md:ml-5
            p-1
            relative
            w-full
            sm:mr-0 sm:right-auto
          "
        >
<!--          <a href="#" class="block pr-5">-->
<!--            <ShareNetwork-->
<!--                network="facebook"-->
<!--                url="https://news.vuejs.org/issues/180"-->
<!--                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."-->
<!--                description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."-->
<!--                quote="The hot reload is so fast it\'s near instant. - Evan You"-->
<!--                hashtags="vuejs,vite"-->
<!--            >-->
<!--              <svg-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  class="h-6 w-6"-->
<!--                  fill="none"-->
<!--                  viewBox="0 0 24 24"-->
<!--                  stroke="currentColor"-->
<!--              >-->
<!--                <path-->
<!--                    stroke-linecap="round"-->
<!--                    stroke-linejoin="round"-->
<!--                    stroke-width="2"-->
<!--                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"-->
<!--                />-->
<!--              </svg>-->
<!--            </ShareNetwork>-->

<!--          </a>-->
          <a v-on:click="showCreateGroupModal()" class="block pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
          <a href="#" v-on:click="openRequestModal()" class="block pr-5 relative">
              <message-alert-icon />
          </a>
<!--          <a href="#" class="block relative">-->
<!--            <img-->
<!--              alt="Maurice Lokumba"-->
<!--              src="/images/1.jpg"-->
<!--              class="h-10 mx-auto object-cover rounded-full w-10"-->
<!--            />-->
<!--          </a>-->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { inject } from 'vue';

const toggle = inject('toggle');
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import MessageAlertIcon from 'vue-material-design-icons/MessageAlert.vue';

import AddCircleIcon from 'vue-material-design-icons/PlusCircle.vue';
import CountryFlag from 'vue-country-flag-next'
import {NetVueSocialSharing, ShareNetwork} from 'vue-social-sharing'

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
    showCreateGroupModal() {
      this.$store.dispatch('submitGroupModal/openModal')
    },
    openRequestModal(){
      this.$store.dispatch('requestModal/setTextInput', true)
      this.$store.dispatch('requestModal/setType', 'suggestion')
      this.$store.dispatch('requestModal/setTitle', {title : `Submit your bug or suggestion`})
      this.$store.dispatch('requestModal/openModal')
    },
    openRequestModalSuggest(){
      this.$store.dispatch('requestModal/setTextInput', true)
      this.$store.dispatch('requestModal/setType', 'new_location')
      this.$store.dispatch('requestModal/setTitle', {title : `Suggest a location`})
      this.$store.dispatch('requestModal/openModal')
    },
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
