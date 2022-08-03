<template>
  <div v-if="errorState === true" class="p-4   rounded-lg  shadow-md  ">
    <div class="p-4 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark: bg-red-100 dark:text-red-700" role="alert">
      <span class="font-medium">There was an error fetching wallets</span>
    </div>
  </div>
</template>
<script>
import { copyText } from 'vue3-clipboard'

export default {
  props: ['errorState'],
  methods: {
    doCopy() {
      copyText(this.challenge)
    }
  }
}
</script>

