<template>
  <div  id="group-invite-modal"  style="z-index: 999999" class="max-w-xl mt-20 mx-auto overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 justify-center items-center h-modal md:h-full md:inset-0">
    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
      <div class="relative rounded-lg shadow bg-gray-700">
        <div class="flex justify-between items-start p-5 ">
          <h3 class="text-xl font-semibold  lg:text-2xl text-white">
            Your invite link :
          </h3>
          <button type="button" class="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="default-modal" v-on:click="closeModal()">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="p-6 rounded-t ">
          <div class="rounded-md bg-gray-800 text-center px-6 py-1 border-2 border-white overflow-x-scroll">
            <a target="_blank" :href="inviteUrl" class="text-xl font-extrabold  leading-relaxed text-white">
              {{inviteUrl}}
            </a>
          </div>
          <div class="text-right text-xs">
            <a v-on:click="openRequestModal()" class=" cursor-pointer text-white underline hover:text-blue-200 ">Report a broken link</a>
          </div>
        </div>
        <div class="rounded-md border-b border-gray-600 text-center px-6 py-1 ">
          <qrcode-vue class="mx-auto" :value="inviteUrl" :size="size" level="H" />
        </div>
        <div class="p-6 space-y-6">
          <div class="text-base leading-relaxed text-gray-400">
            Quick reminder of general chat rules :
            <ul>
              <li>✅ Be polite & respectful</li>
              <li>✅ Safety is important when meeting strangers</li>
              <li>✅ No spam, self promotion, advertising unless explicitly stated</li>
            </ul>
          </div>
        </div>
        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-600">
          <button data-modal-toggle="default-modal" type="button" class="focus:ring-4 focus:ring-gray-300 rounded-lg border  text-sm font-medium px-5 py-2.5  focus:z-10 text-white hover:bg-gray-600" v-on:click="closeModal()">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import QrcodeVue from 'qrcode.vue'

</script>

<script>
export default {
  data() {
    return {
      size: 150
    }
  },
  props: ['inviteUrl'],
  methods: {
    openRequestModal(){
      this.$store.dispatch('groupModal/closeModal')
      this.$store.dispatch('requestModal/setTextInput', false)
      this.$store.dispatch('requestModal/setType', 'broken_link')
      this.$store.dispatch('requestModal/setTitle', {title : "Report a broken link"})
      this.$store.dispatch('requestModal/openModal')
    },
    closeModal() {
      this.$store.dispatch('groupModal/closeModal')
    }
  }
};
</script>
