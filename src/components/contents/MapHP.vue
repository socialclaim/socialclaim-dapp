<template>
<!--  <div class=" px-6 pt-1 h-full pb-6">-->
<!--    <l-map-->
<!--        v-model="zoom"-->
<!--        v-model:zoom="zoom"-->
<!--        :center="[0, 0]"-->
<!--        @move="log('move')"-->
<!--        class="rounded-3xl"-->
<!--    >-->
<!--      <l-tile-layer-->
<!--          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"-->
<!--      ></l-tile-layer>-->
<!--      <l-marker v-for="location in mapLocations" :lat-lng="[location.geonames_feature.latitude, location.geonames_feature.longitude]" />-->
<!--    </l-map>-->
<!--  </div>-->
</template>

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
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  data() {
    return {
      coords: this.coordinates,
      zoom: 2,
      iconWidth: 15,
      iconHeight: 30,
    };
  },
  computed: {
    mapLocations: function() {return this.$store.state.locations.geo_locations }
  },
  mounted() {
    this.$store.dispatch('locations/getGeoLocations')
  }
};
</script>
