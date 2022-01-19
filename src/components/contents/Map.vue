<template>
  <div class="px-6 pt-1 h-80 pb-6 z-10">
    <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[coordinates.latitude, coordinates.longitude]"
        class="rounded-3xl"
    >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="[coordinates.latitude, coordinates.longitude]" />
    </l-map>
  </div>
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
  props: ['coordinates'],
  data() {
    return {
      zoom: 4,
      iconWidth: 15,
      iconHeight: 30,
    };
  },
  computed: {
  },
  methods: {
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>
