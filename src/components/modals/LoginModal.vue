<template>
  <div id="default-modal" aria-hidden="true"  style="z-index: 999999" class="max-w-xl mt-20 mx-auto overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 justify-center items-center h-modal md:h-full md:inset-0">
    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
      <div class="relative rounded-lg shadow bg-gray-700">
        <div class="flex justify-between items-start p-5 rounded-t border-b border-gray-600">
          <h3 class="text-xl font-semibold  lg:text-2xl text-white">
            🔒 One more step...
          </h3>
          <button type="button" v-on:click="closeModal()" class="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="default-modal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="p-2 md:p-6 space-y-6 border-b border-gray-600">
          <p class="hidden md:inline text-base leading-relaxed text-gray-400">
            Due to abuse we now ask for verification before giving our private group links.
            We connect one of your social media accounts to verify that you match a normal user criteria but store <b>absolutely no private information</b>  from your social account.
            <br />Please chose a verification method below :
          </p>

          <table class="min-w-full">
            <thead class="bg-gray-700" >
            <tr>
              <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left  uppercase text-gray-400">
                Requirement :
              </th>
              <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left  uppercase text-gray-400">
                Link
              </th>
            </tr>
            </thead>
            <tbody>
           <tr>
            <td class="text-white"><b>90+</b> friends on facebook</td>
             <td><v-facebook-login :logo-class="'inline mr-2'"	 class="text-blue-400" @login="onLogin" v-model="model" :login-options="{scope: 'user_friends'}" @sdk-init="handleSdkInit" :app-id="app_id"></v-facebook-login>
               <button v-if="scope.logout && model.connected" @click="scope.logout">
                 Logout
               </button></td>
           </tr>
           <tr>
             <td class="text-white my-2">I have an invite code</td>
             <td class="flex my-2">
               <input type="text" v-model="manualToken" id="small-input" placeholder="ABCD000" class="block p-2 w-full rounded-l-lg border-l  sm:text-xs  bg-gray-400 border-gray-600 placeholder-white text-white focus:ring-offset-transparent">
               <button v-on:click="setManualToken()" type="submit" class="text-white  focus:ring-4  font-medium rounded-r-lg text-sm px-2  text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                 <add-circle-icon class=" inline-block align-middle opacity-30" :size="15" />
               </button>
               <div v-if="manualTokenError === true">
                 Invalid token
               </div>
             </td>
           </tr>
           <tr class="hidden md:table-row">
             <td class="text-white"><b>3+</b> 5 stars reviews on Couchsurfing</td>
             <td class="text-white opacity-50 italic">Coming soon</td>
           </tr>
           <tr class="hidden md:table-row">
             <td class="text-white"><b>100+</b> followers on Twitter</td>
             <td class="text-white opacity-50 italic">Coming soon</td>
           </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-between items-start p-5 rounded-t">
          <h3 class="text-md font-semibold  lg:text-md text-white">
            <table class="min-w-full">
              <thead class="bg-gray-700" >
              <tr>
                <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left  uppercase text-gray-400">
                  Don't meet the requirements ?
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-white">
                  <a href="https://calendly.com/nomadgroups/account-verification"  type="button" class="text-gray-900 bg-gray-100 bg-opacity-50 hover:bg-gray-200 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center focus:ring-gray-500 mr-2 mb-2">
                    <img class="w-4 h-4 mr-2 -ml-1 text-[#626890]"  src="/images/external/zoomus-icon.svg" />
                    Verifiy manually (zoom meeting)
                  </a>
                </td>
              </tr>
              </tbody>
            </table>

          </h3>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import VFacebookLogin from 'vue-facebook-login-component-next'
import AddCircleIcon from 'vue-material-design-icons/Check.vue';

</script>
<script>
export default {
  props: ['group'],
  data() {
    return {
      app_id: process.env.VUE_APP_FB_APP_ID,
      FB: {},
      manualToken: null,
      manualTokenError: false,
      model: {},
      scope: {}
    };
  },
  computed: {
    token: function() {return this.$store.state.auth.token },
  },
  methods: {
    setToken() {
      const _store = this.$store
      var _self = this

      this.FB.getLoginStatus(function(response) {
        if (response.authResponse && response.authResponse.accessToken)
          _store.dispatch('auth/setToken', {type: 'facebook', token: response.authResponse.accessToken})
        _self.$store.dispatch('groups/getGroup', {id: _self.group.redirect_group_id, auth: _self.token}).then(function(){
          _self.$store.dispatch('groupModal/openModal')
        }, function(){
          _self.$store.dispatch('authModal/openModal')
        })
      });
    },
    setManualToken() {
      var _self = this
      console.log(this.group)
      this.$store.dispatch('auth/checkToken', {auth_token: this.manualToken}).then(function(res){
        if (res === true) {
          localStorage.token = _self.manualToken
          _self.$store.dispatch('auth/setToken', {type: 'manual', token: localStorage.token})
          _self.manualTokenError = false
          _self.closeModal()
          _self.$store.dispatch('groups/getGroup', {id: _self.group.redirect_group_id, auth: _self.token}).then(function(){
            _self.$store.dispatch('groupModal/openModal')
          }, function(){
            _self.$store.dispatch('authModal/openModal')
          })
        } else {
          _self.manualTokenError = true
        }
      })
    },
    handleSdkInit({ FB, scope }) {
      this.FB = FB
      this.scope = scope
    },
    onLogin() {
      this.setToken();
    },
    closeModal() {
      this.$store.dispatch('authModal/closeModal')
    }
  },
};
</script>
