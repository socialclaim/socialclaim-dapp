<template>
  <header class=" bg-gray-900 opacity-95 ">
    <div class="">
      <router-link class="relative  block w-60 h-20" :to="{name: 'Home'}"><img class=" fill-white w-36 ml-10 pt-3 pb-0" src="/images/logo.svg"  />
        <div class="absolute right-0 top-5   pb-5.5">    <span class="text-md align-bottom bg-white rounded-md px-2  font-extrabold text-gray-900">Beta</span>
        </div>
      </router-link>
    </div>
<!--    <a href="#" class=" text-white inline-block pr-5">-->
<!--      <svg-->
<!--          xmlns="http://www.w3.org/2000/svg"-->
<!--          class="h-6 w-6"-->
<!--          fill="none"-->
<!--          viewBox="0 0 24 24"-->
<!--          stroke="currentColor"-->
<!--      >-->
<!--        <path-->
<!--            stroke-linecap="round"-->
<!--            stroke-linejoin="round"-->
<!--            stroke-width="2"-->
<!--            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"-->
<!--        />-->
<!--      </svg>-->
<!--    </a>-->
<!--    <a href="#" class=" text-white inline-block pr-5">-->
<!--      <svg-->
<!--          xmlns="http://www.w3.org/2000/svg"-->
<!--          class="h-6 w-6"-->
<!--          fill="none"-->
<!--          viewBox="0 0 24 24"-->
<!--          stroke="currentColor"-->
<!--      >-->
<!--        <path-->
<!--            stroke-linecap="round"-->
<!--            stroke-linejoin="round"-->
<!--            stroke-width="2"-->
<!--            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"-->
<!--        />-->
<!--      </svg>-->
<!--    </a>-->

<!--    <div-->
<!--      class="-->
<!--        flex flex-center flex-col-->
<!--        h-full-->
<!--        justify-center-->
<!--        mx-auto-->
<!--        relative-->
<!--        px-3-->
<!--        text-white-->
<!--        z-10-->
<!--      "-->
<!--    >-->
<!--      <div-->
<!--        class="-->
<!--          flex-->
<!--          items-center-->
<!--          pl-1-->
<!--          relative-->
<!--          w-full-->
<!--          sm:ml-0 sm:pr-2-->
<!--          lg:max-w-68-->
<!--        "-->
<!--      >-->

<!--        <div class="container flex left-0 relative w-3/4">-->
<!--          <div-->
<!--            class="-->
<!--              group-->
<!--              hidden-->
<!--              items-center-->
<!--              ml-8-->
<!--              relative-->
<!--              w-full-->
<!--              md:flex-->
<!--              lg:w-72-->
<!--            "-->
<!--          >-->
<!--            <div-->
<!--              class="-->
<!--                absolute-->
<!--                block-->
<!--                cursor-pointer-->
<!--                flex-->
<!--                items-center-->
<!--                justify-center-->
<!--                h-10-->
<!--                p-3-->
<!--                pr-2-->
<!--                text-gray-500 text-sm-->
<!--                uppercase-->
<!--                w-auto-->
<!--                sm:hidden-->
<!--              "-->
<!--            >-->
<!--              <svg-->
<!--                fill="none"-->
<!--                class="h-5 relative w-5"-->
<!--                stroke-linecap="round"-->
<!--                stroke-linejoin="round"-->
<!--                stroke-width="2"-->
<!--                stroke="currentColor"-->
<!--                viewBox="0 0 24 24"-->
<!--              >-->
<!--                <path-->
<!--                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"-->
<!--                />-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </header>
</template>

<script setup>
import { inject } from 'vue';

const toggle = inject('toggle');
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import MessageAlertIcon from 'vue-material-design-icons/MessageAlert.vue';

import AddCircleIcon from 'vue-material-design-icons/PlusCircle.vue';
import CountryFlag from 'vue-country-flag-next'

</script>
<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    locations: function() {return this.$store.state.locations.locations }
  },
  methods: {
    getLocations() {
      this.$store.dispatch('locations/getLocations', {query: this.query})
    },
    clearLocations() {
      this.query = ''
      this.$store.dispatch('locations/clearLocations')
    },
  }
}
</script>
