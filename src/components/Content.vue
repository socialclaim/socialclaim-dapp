<style>
.normal-flag {
  margin: 0 !important;
  vertical-align: top;
}
</style>

<template>

  <div class="flex flex-wrap" v-if="location">
    <div class="w-full lg:w-8/12 bg-gray-800 py-6 px-6 rounded-3xl">
      <div class="flex justify-between text-white items-center mb-4">
        <h1 class="text-xl md:text-3xl font-bold"><span class="hidden md:inline"><country-flag class="" :country='location.geonames_feature.country_code' size='normal' /></span>
          <span class="mr-2">Digital nomads in <span v-if="!location.geonames_alternate_name">{{ location.geonames_feature.name }}</span><span v-if="location.geonames_alternate_name">{{location.geonames_alternate_name.alternate_name}}</span>, {{ location.geonames_feature.country_code }} </span>
          <span v-if="location.geonames_parent_feature && location.geonames_parent_feature.location" class="mr-2 text-sm font-light"><router-link :to="{ name: 'Location', params: { slug: location.geonames_parent_feature.location.slug }}"><span class="underline ">Part of  {{ location.geonames_parent_feature.name }}</span></router-link></span>
          <span v-if="location.geonames_parent_feature && !location.geonames_parent_feature.location" class="mr-2 text-sm font-light">{{ location.geonames_parent_feature.name }}</span>
        </h1>
      </div>
      <content-container v-if="location.state === 'active'" :location="location" :public_groups="location.public_groups" :managed_groups="location.managed_groups" :parent_groups="location.parent_groups" />

      <div v-if="location.state !== 'active'" class="p-2">
        <div class="inline-block py-2 min-w-full grid grid-rows-2 md:grid-cols-2 gap-3">
          <div class="shadow-md rounded-lg border border-gray-700 shadow-md  bg-gray-800 hover:bg-gray-700">
            <a v-on:click="openRequestModal()" class=" cursor-pointer flex block p-2 w-full rounded-lg  align-middle ">
              <div class="flex-none p-3">
                <domain-off-icon :size="32"  fill-color="#FFFFFF" class="inline-block"/>
              </div>
              <div class="full">
                <span class="mb-2 text-lg font-bold tracking-tight text-white">Due to low activity this city is disabled. (click to request)</span>
                <div v-if="location.create_requests" class=" italic text-sm font-normal text-gray-400">This city has been requested <br />{{location.create_requests.length}} time(s) before</div>
              </div>
            </a>
          </div>
          <div class="shadow-md rounded-lg border border-gray-700 pl-5">
            <div class="font-normal text-white mt-3 text-lg font-bold">Want to become an embassador for <span v-if="!location.geonames_alternate_name">{{ location.geonames_feature.name }}</span><span v-if="location.geonames_alternate_name">{{location.geonames_alternate_name.alternate_name}}</span> ?</div>
            <a href="https://calendly.com/nomadgroups/become-an-embassador"  type="button" class="my-5 mr-2 focus:ring-4 focus:ring-gray-300 rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 text-white hover:bg-gray-600 inline-flex items-center">
              <img class="w-4 h-4 mr-2 -ml-1 text-[#626890]"  src="/images/external/zoomus-icon.svg" />
              Talk to us ! (zoom meeting)
            </a>
          </div>
          <div v-if="parent_groups && parent_groups.length > 0" class="mt-10 shadow-md rounded-lg">
            <table class="min-w-full">
              <thead class="bg-gray-700" >
              <tr>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400">
                  Groups in   <span class="font-bold">
              {{ location.geonames_parent_feature.name }}<country-flag class="pt-1" :country='location.geonames_feature.country_code' size='small' />
            </span> :
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400">
                  Focus
                </th>

                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400">
                  Platform
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400">
                  Link
                </th>
              </tr>
              </thead>
              <tbody>
              <content-box  v-for="item in parent_groups" :key="item.id" :item="item" />
              </tbody>
            </table>
          </div>

        </div>
      </div>



    </div>
    <div class="hidden md:block md:w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4" v-if="location && location.picture">
      <Map :coordinates="{latitude: location.geonames_feature.latitude,
      longitude: location.geonames_feature.longitude}" />
      <div class="text-white rounded-3xl px-4 py-4 mx-6 mb-4 bg-cover bg-center bg-gradient-to-b " :style="{'background-image': `url(${location.picture.service_url})`}">
<!--        <div v-if="location.state === 'active'" class="rounded-3xl px-4 py-4 mx-4 mb-4 bg-gray-900 bg-opacity-80">-->
<!--          <h3>In {{ location.geonames_feature.name }}, we reference {{location.managed_groups.length + location.public_groups.length}} group(s) for digital nomads, expats and locals with a traveller mindset.  With a population of XX inhabitants, the nomad ratio is-->
<!--            XXX. Impressive ! It has the most events and It's in the top XXX of the best cities</h3>-->
<!--        </div>-->
        <div class="rounded-3xl px-4 py-4 mx-4 mb-4 bg-gray-900 bg-opacity-80" v-if="location && (location.links && location.links.length > 0 || location.geonames_feature && location.geonames_feature.links && location.geonames_feature.links.length > 0)" >
          <div class=" text-white font-bold pb-5">Useful links for {{ location.geonames_feature.name }} :</div>
          <ul>
            <li v-for="m in location.links" :key="m.id">
              <a :href="m.value" target="_blank">
                <div v-if="m.key == 'nomadlist_url'">
                  <img src="/images/external/nomadlist.svg" class=" bg-white rounded-md w-24"/>
                </div>
              </a>
            </li>
            <li v-for="m in location.geonames_feature.links" :key="m.id">
              <div class=" mt-4">
                <a :href="m.alternate_name" target="_blank" class="bg-white text-gray-900 rounded-md  py-2 px-4 ">
                  <b>{{getHostname(m.alternate_name)}}</b>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import ContentContainer from '../components/contents/ContentContainer.vue';
import Map from '../components/contents/Map.vue';
import CountryFlag from 'vue-country-flag-next'
import DomainOffIcon from "vue-material-design-icons/DomainOff.vue"


</script>
<script>


export default {
  data() {
    return {
      showModal: false
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    getFullPath: function() { return this.$route.path },
    location: function() {return this.$store.state.locations.location },
    groupModalStatus: function() {return this.$store.state.groupModal.status }
  },
  watch: {
    getFullPath () {
      this.getData()
    }
  },
  methods: {
    openRequestModal(){
      this.$store.dispatch('requestModal/setTextInput', false)
      this.$store.dispatch('requestModal/setType', 'activate_location')
      this.$store.dispatch('requestModal/setTitle', {title : `Vote for ${this.location.geonames_feature.name}`})
      this.$store.dispatch('requestModal/openModal')
    },
    getData() {
      this.$store.dispatch('locations/getLocation', {slug: this.$route.params.slug})
    },
    getLocations() {
      this.$store.dispatch('locations/getLocations', {query: this.$route.params.slug})
    },
    getHostname(value) {
      let url = new URL(value);
      return url.hostname;
    }
  }
}
</script>
