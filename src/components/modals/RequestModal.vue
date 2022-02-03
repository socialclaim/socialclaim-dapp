<template>
  <div  id="group-invite-modal"  style="z-index: 99999"  class="max-w-xl mt-20 mx-auto overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-20 justify-center items-center h-modal md:h-full md:inset-0">


    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
      <div class="relative rounded-lg shadow bg-primary-700">

        <div class="flex justify-between items-start p-5 ">
          <h3 class="text-xl font-semibold  lg:text-2xl text-white">
            {{requestModal.title}} :
          </h3>
          <button type="button" class="text-primary-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-primary-600 hover:text-white" data-modal-toggle="default-modal" v-on:click="closeModal()">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>

        </div>
        <div class="px-6 pb-6 rounded-t ">
          <vue-recaptcha  @verify="onVerify" ref="recaptcha" :sitekey="'6LeguwseAAAAALc2WCVUcA3-aCYJJ3D7wretX8xz'" />
          <!--          <label for="email-adress-icon" class="block mb-2 pt-6 text-sm font-medium text-primary-400">Name :</label>-->
<!--          <div class="relative mt-1">-->
<!--            <input type="text" v-model="group.title" class="border border-primary-300 text-sm rounded-lg block w-full p-2.5 bg-primary-700 border-primary-600 placeholder-primary-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Group name">-->
<!--          </div>-->
<!--          <label class="block mb-2 pt-6 text-sm font-medium text-primary-400">Platform :</label>-->
<!--          <select  v-model="group.platform" id="countries" class="border text-sm rounded-lg  block w-full p-2.5 bg-primary-700 border-primary-600 placeholder-primary-400 text-white focus:ring-primary-500 focus:border-primary-500">-->
<!--            <option v-for="platform in groupTypes.platforms">{{ platform }}</option>-->
<!--          </select>-->
<!--          <label for="email-adress-icon" class="block mb-2 pt-6 text-sm font-medium text-primary-400">Invite link</label>-->
<!--          <div class="relative mt-1">-->
<!--            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">-->
<!--              <svg class="w-5 h-5 text-primary-500 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>-->
<!--            </div>-->
<!--            <input type="text" v-model="group.invite_url" id="email-adress-icon" class="border border-primary-300 text-sm rounded-lg block w-full pl-10 p-2.5 bg-primary-700 border-primary-600 placeholder-primary-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="https://...">-->
<!--          </div>-->
<!--          <label class="block mb-2 pt-6 text-sm font-medium text-primary-400">Type :</label>-->
<!--          <select  v-model="group.type" id="countries" class="border text-sm rounded-lg  block w-full p-2.5 bg-primary-700 border-primary-600 placeholder-primary-400 text-white focus:ring-primary-500 focus:border-primary-500">-->
<!--            <option v-for="types in groupTypes.types">{{ types }}</option>-->
<!--          </select>-->
        </div>

<!--        <div class="p-6 space-y-6">-->
<!--          <div class="text-base leading-relaxed text-primary-400">-->
<!--            Quick reminder of the chat rules :-->
<!--            <ul>-->
<!--              <li>✅</li>-->
<!--              <li>✅</li>-->
<!--              <li>✅</li>-->
<!--              <li>❌</li>-->
<!--              <li>❌</li>-->
<!--              <li>❌</li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
        <div class="m-5" v-show="requestModal.textInput">
          <label class="block mb-2 text-sm font-medium text-primary-400">Your message</label>
          <textarea id="message" v-model="message" rows="4" class="block p-2 w-full text-sm  rounded-lg border bg-primary-700 border-primary-600 placeholder-primary-400 text-white focus:ring-primary-500focus:border-primary-500" placeholder="Leave a message..."></textarea>
        </div>
        <div class="m-5" v-show="requestModal.textInput">
          <label class="block mb-2 text-sm font-medium text-primary-400">A way to contact you :</label>
          <input id="contact" v-model="contact" rows="4" class="block p-2 w-full text-sm  rounded-lg border bg-primary-700 border-primary-600 placeholder-primary-400 text-white focus:ring-primary-500focus:border-primary-500" placeholder="Leave a way of contact" />
        </div>
        <div class="flex items-center p-6 space-x-2 rounded-b ">
          <button v-on:click="submitRequest()" data-modal-toggle="default-modal" type="button" class="focus:ring-4 focus:ring-primary-300 rounded-lg border  text-sm font-medium px-5 py-2.5  focus:z-10 text-white hover:bg-primary-600">Request</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { VueRecaptcha } from 'vue-recaptcha';
</script>
<script>
export default {
  props: ['inviteUrl', 'location', 'title'],
  data() {
    return {
      recaptchaToken: '',
      message: null,
      contact: null
    }
  },
  methods: {
    onVerify: function (response) {
      this.recaptchaToken = response
    },
    closeModal() {
      this.$store.dispatch('requestModal/closeModal')
    },
    submitRequest(type) {
      const _self = this;
      this.$store.dispatch('requests/createRequest', {recaptcha: this.recaptchaToken, type: this.requestModal.type, location_id: this.location.id, message: this.message, contact: this.contact}).then(function(){
        _self.$store.dispatch('locations/incrementRequests')
        _self.closeModal();
      })
    }
  },
  computed: {
    groupTypes: function() {return this.$store.state.groupTypes },
    token: function() {return this.$store.state.auth.token },
    location: function() {return this.$store.state.locations.location },
    requestModal: function() {return this.$store.state.requestModal },
  },
  created() {
    this.$store.dispatch('groupTypes/getGroupTypes')
  },
};
</script>
