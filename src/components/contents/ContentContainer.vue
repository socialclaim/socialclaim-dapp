<template>
  <div class="col-span-4 text-white font-bold"></div>
  <submit-group-modal v-show="submitGroupModalStatus === 'opened'" />
  <div class="p-2">
    <div class=" py-2  overflow-x-auto">
      <div class="hidden md:block shadow-md rounded-lg ">
        <table class="  min-w-full">
          <thead class="bg-primary-700" >
          <tr>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Official NomadGroups.io groups :
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Focus
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Platform
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Link
            </th>
          </tr>
          </thead>
          <tbody>
          <div v-if="!managed_groups || managed_groups.length == 0" class="p-2">
            <a href="#" class="flex block p-2 max-w-sm rounded-lg border align-middle shadow-md  bg-primary-800 border-primary-700 hover:bg-primary-700">
              <div class="flex-none">
                <exclamation-thick-icon :size="64"  fill-color="#FFFFFF" class="inline-block"/>
              </div>
              <div class="flex-grow">
                <span class="mb-2 text-2xl font-bold tracking-tight text-white">No groups here yet !</span>
                <div class="font-normal text-primary-400">Click this to request creation of a chat for this city !</div>
              </div>
            </a>
          </div>
          <content-box  v-for="item in managed_groups" :key="item.id" :item="item" />
          </tbody>
        </table>
      </div>
      <div class="hidden md:block mt-10 shadow-md rounded-lg">
        <table class="min-w-full">
          <thead class="bg-primary-700" >
          <tr>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Other groups :
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Focus
            </th>

            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Platform
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Link
            </th>
          </tr>
          </thead>
          <tbody>
          <div v-if="(!public_groups || public_groups.length == 0) && !groupSubmitted && !dismissSubmitted" class="p-2">
            <a href="#" v-on:click="showCreateGroupModal()" class="flex block p-2 max-w-sm rounded-lg border align-middle shadow-md  bg-primary-800 border-primary-700 hover:bg-primary-700">
              <div class="flex-none">
                <exclamation-thick-icon :size="64"  fill-color="#FFFFFF" class="inline-block"/>
              </div>
              <div class="flex-grow">
                <span class="mb-2 text-2xl font-bold tracking-tight text-white">No groups here yet !</span>
                <div class="font-normal text-primary-400">Click this to request creation of a chat for this city !</div>
              </div>
            </a>
          </div>

          <div  v-if="groupSubmitted && !dismissSubmitted" id="alert-additional-content-3" class="p-4 rounded-lg bg-green-200 m-4" role="alert">
            <div class="flex items-center">
              <svg class="mr-2 w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <h3 class="text-lg font-medium text-green-700 dark:text-green-800">Group submitted successfully</h3>
            </div>
            <div class="mt-2 mb-4 text-sm text-green-800">
              We will do a manual review then list your group on our platofrm. It may take up to 72 hours to verify.
              If it is still not listed past this delay, please use the bug report form to get in touch with us.
            </div>
            <div class="flex">
              <button type="button" v-on:click="unsetGroupSubmitted()" class="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white" data-collapse-toggle="alert-additional-content-3" aria-label="Close">
                Dismiss
              </button>
            </div>
          </div>

          <content-box  v-for="item in public_groups" :key="item.id" :item="item" />
          <tr v-show="public_groups && public_groups.length > 0"  class="bg-primary-800">
            <td class="py-4 px-6 text-sm font-medium italic  underline whitespace-nowrap text-primary-400">
              <a  v-on:click="showCreateGroupModal()" class="cursor-pointer">List your group</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="md:hidden">
        <div scope="col" class=" text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
          Official NomadGroups.io groups :
        </div>

        <div v-for="item in managed_groups" :key="item.id" :item="item"  class="mt-4 p-2 w-full text-center rounded-lg border shadow-md sm:p-8 bg-primary-800 border-primary-700">
          <group-invite-modal v-show="groupModalStatus === 'opened'" :invite-url="item.invite_url" />
          <h3 class="mb-2 text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mb-5 text-base text-primary-500 sm:text-lg dark:text-primary-400">Focus: {{ item.type }}, Platform: {{ item.platform }}</p>
          <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a v-on:click="getGroup(item.id)"  class="w-full sm:w-auto flex  focus:ring-primary-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-primary-700 hover:bg-primary-600 focus:ring-primary-700">
              <div class="text-left">
                <div class="-mt-1 font-sans text-sm font-semibold">
                  Join now <span v-if="item.private">🔒</span></div>
              </div>
            </a>
          </div>
        </div>

        <div scope="col" class="mt-4 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
          Other groups :
        </div>

        <div v-for="item in public_groups" :key="item.id" :item="item"  class="mt-4 p-2 w-full text-center rounded-lg border shadow-md sm:p-8 bg-primary-800 border-primary-700">
          <h3 class="mb-2 text-xl font-bold text-white">New York City hangouts (Today) by NomadGroups.io</h3>
          <p class="mb-5 text-base text-primary-500 sm:text-lg dark:text-primary-400">Focus: Hangouts, Platform: telegram</p>
          <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="#" class="w-full sm:w-auto flex  focus:ring-primary-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-primary-700 hover:bg-primary-600 focus:ring-primary-700">
              <div class="text-left">
                <div class="-mt-1 font-sans text-sm font-semibold">Join now 🔒</div>
              </div>
            </a>
          </div>
        </div>

        <div v-if="!public_groups || public_groups.length == 0" class="p-2">
          <a href="#" class="flex block p-2 max-w-sm rounded-lg border align-middle shadow-md  bg-primary-800 border-primary-700 hover:bg-primary-700">
            <div class="flex-none">
              <exclamation-thick-icon :size="64"  fill-color="#FFFFFF" class="inline-block"/>
            </div>
            <div class="flex-grow">
              <span class="mb-2 text-2xl font-bold tracking-tight text-white">No groups here yet !</span>
              <div class="font-normal text-primary-400">Click this to request creation of a chat for this city !</div>
            </div>
          </a>
        </div>

      </div>

      <div v-if="parent_groups && parent_groups.length > 0" class="hidden md:block mt-10 shadow-md rounded-lg">
        <table class="min-w-full">
          <thead class="bg-primary-700" >
          <tr>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Groups in   <span class="font-bold">
              {{ location.geonames_parent_feature.name }}<country-flag class="pt-1" :country='location.geonames_feature.country_code' size='small' />
            </span> :
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Focus
            </th>

            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
              Platform
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-primary-400">
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

</template>

<script setup>

import ExclamationThickIcon from "vue-material-design-icons/ExclamationThick.vue";
import ContentBox from './ContentBox.vue';
import SubmitGroupModal from "../modals/SubmitGroupModal.vue"
import CountryFlag from 'vue-country-flag-next'
import GroupInviteModal from "../modals/GroupInviteModal.vue"
</script>
<script>
export default {
  props: ['public_groups', 'managed_groups', 'parent_groups', 'location'],
  data() {
    return {
      counter: 0,
      dismissSubmitted: false
    }
  },
  methods: {
    showCreateGroupModal() {
      this.$store.dispatch('submitGroupModal/openModal')
    },
    unsetGroupSubmitted() {
      this.dismissSubmitted = true
    },
    getGroup(id){
      var _self = this
      this.$store.dispatch('groups/getGroup', {id: id, auth: this.token}).then(function(){
        _self.$store.dispatch('groupModal/openModal')
      }, function(){
        _self.$store.dispatch('authModal/openModal')
      })
    },
  },
  computed: {
    token: function() {return this.$store.state.auth.token },
    submitGroupModalStatus: function() {return this.$store.state.submitGroupModal.status },
    groupSubmitted: function() {return this.$store.state.groups.submitted },
    groupModalStatus: function() {return this.$store.state.groupModal.status }
  },
}
</script>
