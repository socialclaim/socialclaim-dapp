<template>
  <group-invite-modal v-show="groupModalStatus === 'opened'" :invite-url="group.invite_url" />
  <tr class="bg-gray-800">
    <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap text-white">
      <h2>{{ item.title }}</h2>
      <p class="text-xs text-gray-400 italic" v-if="item.group_sponsor">
        <a :href="item.group_sponsor.url">by {{item.group_sponsor.name}}</a>
      </p>
    </td>
    <td v-if="item.type" class="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
      {{ item.type }}
    </td>
<!--    <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">-->
<!--         <span class="text-xs opacity-50">-->
<!--                <account-icon class="inline-block h-xs align-middle" />12 ready to hangout-->
<!--              <span>-->
<!--                <clock-icon class="inline-block h-xs align-middle" />resets weekly-->
<!--              </span>-->
<!--      </span>-->
<!--    </td>-->

    <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
      {{ item.platform }}
    </td>
    <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap">
      <a href="#" v-on:click="getGroup()" class=" hover:text-blue-900 text-blue-500 hover:underline">Join <span v-if="item.private">🔒</span></a>
    </td>
  </tr>
</template>

<script setup>
import AccountMultiplePlusIcon from "vue-material-design-icons/AccountMultiplePlus.vue";
import AccountIcon from "vue-material-design-icons/Account.vue";
import AndroidMessagesIcon from "vue-material-design-icons/AndroidMessages.vue";
import ClockIcon from "vue-material-design-icons/Clock.vue";
import GroupInviteModal from "../modals/GroupInviteModal.vue"
</script>

<script>
export default {
  props: ['item'],
  data() {
    return {
      counter: 0,
      show: false
    }
  },
  methods: {
    getGroup(){
      var _self = this
      this.$store.dispatch('groups/getGroup', {id: this.item.id, auth: this.token}).then(function(){
        _self.$store.dispatch('groupModal/openModal')
      }, function(){
        _self.$store.dispatch('authModal/openModal')
      })
    },
  },
  watch: {
    groupModalStatus() {
    }
  },
  computed: {
    group: function() {return this.$store.state.groups.group },
    token: function() {return this.$store.state.auth.token },
    groupModalStatus: function() {return this.$store.state.groupModal.status }
  },
}
</script>
