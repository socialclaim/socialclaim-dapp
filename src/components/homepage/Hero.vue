<style>

.vcpg[data-v-63943e43] {
  width: 100%;
  border-radius: 12px 12px 0 0;
}

.vcpg[data-v-63943e43] .vcp * {
  box-sizing: border-box
}

.vcpg[data-v-63943e43] .vcp__header {
  background-color: #000b48ff;
  height: 46px;
  border-radius: 12px 12px 0 0;
  transition: background-color .3s ease
}

.vcpg[data-v-63943e43] .vcp__header:hover {
  background-color: #FFF
}

.vcpg[data-v-63943e43] .vcp__header:active {
  background-color: var(--bg-color-header-active)
}

.vcpg[data-v-63943e43] .vcp:not(:first-of-type) .vcp__header {

}

.vcpg[data-v-63943e43] .vcp__header-title {
  font-weight: 500
}

.vcpg[data-v-63943e43] .vcp__body {
  background-color: var(--bg-color-body)
}

.vcp__header[data-v-64321428] {
  display: flex;
  padding: 12px;
  pointer-events: none
}

.vcp--expandable .vcp__header[data-v-64321428] {
  pointer-events: auto;
  cursor: pointer
}

.vcp__header-title[data-v-64321428] {
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: bold;
  color: #000b48ff
}

.vcp__header-icon[data-v-64321428] {
  display: flex;
  align-items: center;
  transition: transform .3s cubic-bezier(.5, .25, 0, 1);
  color: #000b48ff
}

.vcp--expanded .vcp__header-icon[data-v-64321428] {
  transform-origin: center;
  transform: rotate(180deg)
}

.vcp__header-icon > span[data-v-64321428] {
  display: flex;
  height: 24px;
  width: 24px
}

.vcp__header-icon[data-v-64321428] svg {
  height: 100%;
  width: 100%
}

.vcp__body[data-v-64321428] {
  overflow: hidden;
  transition: all .3s cubic-bezier(.5, .25, 0, 1)
}

.vcp__body-content[data-v-64321428] {
  padding: 12px
}

.slide-enter-from[data-v-64321428], .slide-leave-to[data-v-64321428] {
  opacity: .25
}


.simple-typeahead[data-v-0ccb6f26] {
  position: relative;
  width: 100%;
}
.simple-typeahead > input[data-v-0ccb6f26] {
  margin-bottom: 0;
}
.simple-typeahead .simple-typeahead-list[data-v-0ccb6f26] {
  position: absolute;
  width: 100%;
  border: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 0.1rem solid #FFF;
  z-index: 9;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-header[data-v-0ccb6f26] {
  background-color: #fafafa;
  padding: 0.6rem 1rem;
  border-bottom: 0.1rem solid #FFF;
  border-left: 0.1rem solid #FFF;
  border-right: 0.1rem solid #FFF;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-footer[data-v-0ccb6f26] {
  background-color: #fafafa;
  padding: 0.6rem 1rem;
  border-left: 0.1rem solid #FFF;
  border-right: 0.1rem solid #FFF;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item[data-v-0ccb6f26] {
  cursor: pointer;
  background-color: #000b48ff;
  padding: 0.6rem 1rem;
  border-bottom: 0.1rem solid #FFF;
  border-left: 0.1rem solid #FFF;
  border-right: 0.1rem solid #FFF;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item[data-v-0ccb6f26]:last-child {
  border-bottom: none;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item.simple-typeahead-list-item-active[data-v-0ccb6f26] {
  background-color: #000b48ff;
}
</style>
<template>
  <section id="verify" >
    <div class=" text-white grid grid-cols-1 md:grid-cols-2 px-4  pb-20 gap-6 mx-auto max-w-screen-lg">
      <div class="mt-12" v-if="!isActivated">
        <div class="font-bold leading-relaxed mt-16 lg:text-5xl ">
          Let the Crypto 🌎<br /> know you are the <span class="text-secondary underline">right</span> person
        </div>
        <h2 class="text-md  md:mt-5 md:text-xl">Link your BSC wallet to your social media profiles</h2>
      </div>
      <div v-if="isActivated" class="md:mt-20 relative cursor-pointer outline-none">
          <div class="w-full relative h-80 ">
            <!--          <li class="w-full relative h-14">-->
            <div class="absolute right-0 top-1 w-full h-full rounded-lg bg-secondarymedium"></div>
            <div class="absolute right-2 top-0 w-full h-full rounded-lg bg-tertiary"></div>
            <div class="absolute overflow-y-scroll w-full h-full z-10 right-1 top-1 hidden text-lg font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow dark:bg-secondary sm:flex dark:divide-gray-700 dark:text-gray-400">

              <div class="w-full relative shadow-md sm:rounded-lg">
               <div  class="text-white p-4 ">Latest wallets up for grabs</div>
                <WalletNotifications :errorState="walletsErrorState" />

                <div v-if="walletsLoading">
                  <svg  class="inline-block w-8 h-8 mr-2 text-gray-100 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                  </svg>
                </div>

                <table v-if="!walletsErrorState && !walletsLoading" class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-secondary dark:text-secondarymedium">
                  <tr>
                    <th scope="col" class="py-3 px-3">
                      URL
                    </th>
                    <th scope="col" class="py-3 px-3">
                      INFO
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-bind:key="wallet.id" class="bg-white border-b dark:bg-secondary dark:border-gray-700" v-for="wallet in wallets">
                    <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{ wallet.description }}</a><br/>
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Claim</a>
                    </th>
                    <td class="py-2 pl-2 text-sm ">
                      <h5 class="font-medium  leading-none text-gray-900 dark:text-white">Address:{{shortenAddress(wallet.address)}} <a class=" underline text-tertiary " @click="doCopy(wallet.address)">Copy </a> <br/>
                        <span class="text-gray-300 text-md">{{ wallet.balance.balance }} MATIC</span>
                      </h5>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
<!--        <vue-collapsible-panel-group class="rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700" accordion>-->
<!--          <vue-collapsible-panel>-->
<!--            <template #title >-->
<!--              Setup-->
<!--            </template>-->
<!--            <template #content>-->
<!--              <ul class="list-disc pl-6 text-md">-->
<!--                <li class="mt-3">Install MetaMask and add the <a class="underline text-yellow-600" target="_blank" href="https://chainlist.org/chain/80001">Binance Smart Chain test network</a></li>-->
<!--                <li class="mt-3">-->
<!--                  Request Test <span class="text-yellow-600">$BNB</span> <a target="_blank" class="underline text-yellow-600" href="https://testnet.binance.org/faucet-smart">Here</a>-->
<!--                  and <span class="text-secondary ">$LINK</span> <a target="_blank" class="underline text-secondary" href="https://faucets.chain.link/chapel">Here</a>-->
<!--                </li>-->
<!--                <li  class="mt-3">Make sure your  <span class="text-secondary ">$LINK </span> is <a target="_blank" class="underline text-secondary" href="https://consensys.net/blog/metamask/how-to-add-your-custom-tokens-in-metamask/"> displayed in MetaMask</a></li>-->
<!--              </ul>-->
<!--            </template>-->
<!--          </vue-collapsible-panel>-->
<!--          <vue-collapsible-panel :expanded="false">-->
<!--            <template #title>-->
<!--              Step 1 : Transfer-->
<!--            </template>-->
<!--            <template #content>-->
<!--              <ul class="list-disc pl-6 text-md">-->
<!--                <li class="mt-3">Use the transfer button to send us some <span class="text-secondary ">$LINK </span> so we can request data for you. </li>-->
<!--                <li  class="mt-3">Cost is : <span class="text-secondary ">0.1 $LINK</span> to initiate the verification and <span class="text-secondary ">0.1 $LINK</span> per verification attempt</li>-->
<!--              </ul>-->
<!--            </template>-->
<!--          </vue-collapsible-panel>-->
<!--          <vue-collapsible-panel :expanded="false">-->
<!--            <template #title >-->
<!--              Step 2 : Start the verification process-->
<!--            </template>-->
<!--            <template #content>-->
<!--              <ul class="list-disc pl-6 text-md">-->
<!--                <li class="mt-3">Enter the URL you want to verify</li>-->
<!--                <li  class="mt-3">Click <span class="text-secondary ">Start Verification</span> and wait for the challenge to be displayed</li>-->
<!--                <li  class="mt-3">Copy the challenge in the Bio of the social media you selected <a class=" cursor-pointer"  @click="toggleGif()">ℹ️</a>-->
<!--                  <img v-show="showGif" src="/images/demo.gif" />-->
<!--                </li>-->
<!--                <li  class="mt-3">Click <span class="text-secondary ">Verify</span></li>-->
<!--              </ul>-->
<!--            </template>-->
<!--          </vue-collapsible-panel>-->
<!--        </vue-collapsible-panel-group>-->
<!--        <div class="mt-4" v-if="state==='init'"></div>-->
<!--        <div class="mt-28"  v-else></div>-->
      </div>
      <div class="md:mt-20 relative cursor-pointer outline-none">
        <div class="w-full relative h-16">
<!--          <li class="w-full relative h-14">-->
            <div class="absolute right-0 top-1 w-full h-full rounded-lg bg-secondarymedium"></div>
            <div class="absolute right-2 top-0 w-full h-full rounded-lg bg-tertiary"></div>

          <ul class="absolute w-full z-10 right-1 top-1 hidden text-lg font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li class="w-full">
              <a href="#" @click="setTab(0)" class="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-secondary" aria-current="page"><span :class="tab === 0 ? 'text-white' : 'text-gray-400'">Create a wallet</span></a>
            </li>
            <li class="w-full relative">
              <a href="#" @click="setTab(1)" class="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-secondary dark:hover:bg-gray-700"><span :class="tab === 1 ? 'text-white' : 'text-gray-400'">Claim wallet funds</span></a>
            </li>
          </ul>
        </div>
        <div class="px-4 pt-4 bg-white mt-5 rounded-lg border shadow-md  dark:bg-secondary dark:border-gray-700">
          <div class="flex  items-center mb-2 pb-2 border-b-4 border-secondarymedium">
            <img src="/images/logos/wallet.svg"  class=" pt-2 text-white block object-contain h-16" />
            <div v-if="!isActivated" >
              <a @click="open">
                <h5 class="ml-3 text-xl  leading-none text-gray-900 dark:text-white">Wallet not connected<br />
                  <span  class="text-xs text-gray-300 font-light">Connect with metamask</span></h5>
              </a>
            </div>
            <div v-else class="flex items-center">
              <h5 class="ml-3 text-xl  leading-none text-gray-900 dark:text-white">{{  shortenAddress(address) }}<br />
                <span class="text-xs text-gray-300 font-light">{{ displayEther(balance) }} MATIC</span></h5>
              <div class="flex-col ml-10">
                <div>
                  <label for="transfer" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                  <div class="relative">
                    <input type="number" step=".1" id="transfer" v-model="linkAmount" class="block p-4  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-tertiary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="0.2" required>
                    <button @click="transfer()" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-secondary dark:hover:text-black dark:hover:bg-secondarymedium" >Send $LINK</button>
                  </div>
                </div>
                <div>
                  <span class="text-xs text-gray-300 font-light" >$LINK Credits : <span v-if="linkBalance">{{linkBalance}}</span><span v-else> <a class="text-xs text-tertiary" @click="checkBalance()">Get balance</a></span></span>
                </div>
              </div>
            </div>
          </div>


          <div class="flow-root" v-if="tab === 0" >
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700" >
              <li class="pb-4" data-aos="zoom-in" >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img class="w-12 h-12" src="/images/twitter.svg" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                    <form>
                      <label class="text-xs text-white" >Twitter URL to claim the wallet :</label>
                      <input :disabled="!isActivated" type="text" id="twitter" v-model="twitter.url" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://twitter.com/username" required>
                    </form>
                  </div>
                </div>
                <div v-if="twitter.url.length > 0" class="mt-5">
                  <button v-if="state === 'init' || state === 'verificationSuccessful' || state === 'VerificationError'" v-on:click="requestWalletCreation(twitter.url)" type="button" class=" w-full text-white  hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-tertiary dark:hover:bg-secondary  dark:hover:ring-tertiary focus:outline-none dark:focus:ring-blue-800">
                    <img  src="/images/createclaim.svg"  class="inline-block object-contain h-4 mr-2" />Request wallet creation
                  </button>

                  <div v-if="wallet">
                    <div class="w-full relative h-24">
                      <!--          <li class="w-full relative h-14">-->
                      <div class="absolute right-0 top-1 mt-1 w-full h-full rounded-lg bg-secondarymedium"></div>
                      <div class="absolute right-2 top-0 mt-1 w-full h-full rounded-lg bg-tertiary"></div>

                      <div class=" absolute w-full h-20 mt-2 z-10 right-1 top-1 hidden text-lg font-medium  text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex  dark:bg-secondary dark:divide-gray-700 dark:text-gray-400">
                          <img src="/images/logos/wallet.svg"  class=" pt-2 text-white block object-contain h-16" />
                          <div class="flex items-center">
                            <h5 class="ml-3 mr-3 text-xl  leading-none text-gray-900 dark:text-white">{{shortenAddress(wallet.address)}}<br/>
                              <span class="text-xs text-gray-300 font-light">{{ displayEther(wallet.balance.balance) }} MATIC</span><br />
                              <a class=" underline text-tertiary text-xs" @click="doCopy(wallet.address)">Copy wallet address</a>
                            </h5>
                        </div>
                        <div class="flex items-center">
                          <h5 class="ml-3 text-xl  leading-none text-gray-900 dark:text-white">URL to claim: <br />
                            <a class="underline text-xs text-gray-300 font-light" :href="wallet.description">{{wallet.description}}</a><br/>
                            <a class=" underline text-tertiary text-xs" @click="doCopy(wallet.description)">Copy URL</a>
                          </h5>

                        </div>


                        <!--                        <li class="w-full">-->
<!--                          <a href="#" class="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-secondary dark:text-white" aria-current="page">Create a wallet</a>-->
<!--                        </li>-->
<!--                        <li class="w-full relative">-->
<!--                          <a href="#" class="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-secondary dark:hover:bg-gray-700">Claim a wallet</a>-->
<!--                        </li>-->
                      </div>
                    </div>

                  </div>

<!--                  <button v-else-if="state === 'afterChallengeRecieved'" v-on:click="verify()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">-->
<!--                    <img  src="/images/createclaim.svg"  class="inline-block object-contain h-4 mr-2 " />Verify-->
<!--                  </button>-->
                </div>
              </li>
            </ul>
          </div>
          <div class="flow-root" v-if="tab === 1" >
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700" >
              <li class="pb-4" data-aos="zoom-in" >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img class="w-12 h-12" src="/images/twitter.svg" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                    <form>
                      <label class="text-xs text-white" for="twitter_element">Search for an existing wallet :</label>
                      <vue3-simple-typeahead
                          id="typeahead_id"
                          class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Start writing..."
                          :items="walletsURLs"
                          :minInputLength="1"
                          :itemProjection="itemProjectionFunction"
                          @selectItem="selectItemEventHandler"
                          @onInput="onInputEventHandler"
                          @onFocus="onFocusEventHandler"
                          @onBlur="onBlurEventHandler"
                      >
                      </vue3-simple-typeahead>
                    </form>
                  </div>
                </div>
                <div  class="mt-5">
                  <div v-if="selectedWallet">
                    <div class="w-full relative h-24">
                      <!--          <li class="w-full relative h-14">-->
                      <div class="absolute right-0 top-1 mt-1 w-full h-full rounded-lg bg-secondarymedium"></div>
                      <div class="absolute right-2 top-0 mt-1 w-full h-full rounded-lg bg-tertiary"></div>

                      <div class=" absolute w-full h-20 mt-2 z-10 right-1 top-1 hidden text-lg font-medium  text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex  dark:bg-secondary dark:divide-gray-700 dark:text-gray-400">
                        <img src="/images/logos/wallet.svg"  class=" pt-2 text-white block object-contain h-16" />
                        <div class="flex items-center">
                          <h5 class="ml-3 mr-3 text-xl  leading-none text-gray-900 dark:text-white">{{shortenAddress(selectedWallet.address)}}<br/>
                            <span class="text-xs text-gray-300 font-light">{{ selectedWallet.balance.balance }} MATIC</span><br />
                          </h5>
                        </div>
                        <div class="flex items-center">
                          <h5 class="ml-3 text-xl  leading-none text-gray-900 dark:text-white">URL you own : <br />
                            <a class="underline text-xs text-gray-300 font-light" :href="selectedWallet.description">{{selectedWallet.description}}</a><br/>
                          </h5>

                        </div>

                        <!--                        <li class="w-full">-->
                        <!--                          <a href="#" class="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-secondary dark:text-white" aria-current="page">Create a wallet</a>-->
                        <!--                        </li>-->
                        <!--                        <li class="w-full relative">-->
                        <!--                          <a href="#" class="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-secondary dark:hover:bg-gray-700">Claim a wallet</a>-->
                        <!--                        </li>-->

                      </div>
                    </div>
                    <div v-if="selectedWallet">
                      <form class="mt-5">
                        <label class="text-xs text-white" >MATIC Wallet address to withdraw funds :</label>
                        <input  type="text"  v-model="withdrawAddress" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0x0000...." required>
                      </form>
                    </div>
                    {{ state }}
                    <button v-if="state !== 'afterChallengeRecieved'" v-on:click="requestWithdrawal()" type="button" class=" mt-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-tertiary dark:hover:text-black dark:hover:bg-secondarymedium focus:outline-none dark:focus:ring-blue-800">
                      <img  src="/images/createclaim.svg"  class="inline-block object-contain h-4 mr-2 " />Request Withdrawal
                    </button>
                    <button v-if="state === 'afterChallengeRecieved'" v-on:click="withdraw()" type="button" class=" mt-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-tertiary dark:hover:text-black dark:hover:bg-secondarymedium focus:outline-none dark:focus:ring-blue-800">
                      <img  src="/images/createclaim.svg"  class="inline-block object-contain h-4 mr-2 " />Withdraw
                    </button>
                    <button  disabled="disabled" type="button" class="mt-2 cursor-default w-full text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-400   focus:outline-none ">
                      <img  src="/images/createclaim.svg"  class="inline-block object-contain h-4 mr-2 " />Claim wallet (coming soon)
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Notifications :state="state" :errorState="errorState" :challenge="challenge" :error="error"/>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useBoard, useEthers, displayEther, shortenAddress, useEthersHooks } from 'vue-dapp'
import AOS from "aos"
import { ethers } from "ethers"
import VerifiedAbi from "../../abis/socialclaim.json"
import LinkAbi from "../../abis/link.json"
import Notifications from "../../components/Notifications"
import WalletNotifications from "../../components/WalletNotifications"
import {copyText} from "vue3-clipboard"

export default {
  setup() {
    const { open } = useBoard()
    const { address, balance, chainId, signer } = useEthers()
    const axios = require('axios').default
    const verifiedInterface = new ethers.utils.Interface(VerifiedAbi)
    const linkInterface = new ethers.utils.Interface(LinkAbi)
    const linkTokenContractAddress = process.env.VUE_APP_LINK_CONTRACT_ADDR
    const socialClaimApiURL = process.env.VUE_APP_SOCIALCLAIM_API_URL
    const socialClaimContractAddress = process.env.VUE_APP_SOCIALCLAIM_CONTACT_ADDR
    const requiredChainId = process.env.VUE_APP_REQUIRED_CHAIN_ID
    let provider = new ethers.providers.JsonRpcProvider(process.env.VUE_APP_RPC_PROVIDER)
    const linksigner = provider.getSigner()

    const linkContract = new ethers.Contract(
        linkTokenContractAddress,
        linkInterface,
        linksigner
    );

    const socialClaimContract = new ethers.Contract(
        socialClaimContractAddress,
        verifiedInterface,
        linksigner
    );

    return {
      address,
      balance,
      chainId,
      open,
      displayEther,
      shortenAddress,
      linkContract,
      socialClaimContractAddress,
      socialClaimContract,
      signer,
      requiredChainId,
      axios,
      socialClaimApiURL
    };
  },
  components: {
    Notifications,
    WalletNotifications
  },
  mounted() {
    const { address } = useEthers()
    let _self = this
    AOS.init({ })
    const { onActivated, onChanged } = useEthersHooks()

    onActivated(({ provider }) => {
      if (provider.network.chainId.toString() === this.requiredChainId) {
        this.isActivated = true
        this.loadWallets()
      }
      else
        alert(`Please re-connect using the Polygon Mumbai Testnet (ID: ${this.requiredChainId})`)
    })

    onChanged(({ provider }) => {
      if (provider.network.chainId.toString() === this.requiredChainId)
        this.isActivated = true
      else
        alert(`Please re-connect using the Polygon Mumbai Testnet (ID: ${this.requiredChainId})`)
    })

    this.socialClaimContract.on("PaymentSet", (addr, balance) => {
      if (address.value === addr) {
        _self.linkBalance = balance / 1000000000000000000
      }
    });

    this.socialClaimContract.on("WithdrawalUpdate", (addr, challenge) => {
      if (address.value === addr && challenge.toString() !== "0") {
        this.challenge = challenge.toString()
        _self.state = 'afterChallengeRecieved'
        _self.errorState = false
      }
    });


    this.socialClaimContract.on("WalletCreationUpdate", (addr) => {
      if (address.value === addr) {
        _self.state = 'afterWalletCreationRequest'
      }
    });

    this.socialClaimContract.on("WalletCreated", (addr, walletAddress) => {
      const _self = this
      if (address.value === addr) {
        let id = ethers.utils.toUtf8String(walletAddress);
        id = `${id.substring(0, 8)}-${id.substring(8, 12)}-${id.substring(12, 16)}-${id.substring(16, 20)}-${id.substring(20)}`
        this.axios.get(`${this.socialClaimApiURL}/wallets/${id}`)
            .then(function (response) {WalletCreated
              _self.wallet = JSON.parse(response.data).result
              _self.state = 'afterWalletCreated'
              _self.loadWallets()
            })
            .catch(function () {
            }).then(function(){
        })
      }
    });

    // this.socialClaimContract.on("VerificationResult", (addr, verified) => {
    //   if (address.value === addr) {
    //     _self.state = (verified ? 'verificationSuccessful' : 'VerificationError')
    //     _self.twitter.url = ''
    //     _self.tiktok.url = ''
    //     _self.twitch.url = ''
    //     _self.errorState = false
    //     _self.challenge = ''
    //     _self.linkAmount = null
    //   }
    // });
  },
  data() {
    return {
      state: "init",
      errorState: false,
      walletsErrorState: false,
      walletsLoading: false,
      linkBalance: null,
      challenge: "",
      linkAmount: .2,
      tab: 0,
      showGif: false,
      isActivated: false,
      wallet: null,
      wallets: [],
      walletsURLs: [],
      selectedWallet: null,
      withdrawAddress: null,
      error: "unknown error, please try again",
      twitter: {url: ""}
    };
  },
  methods: {
    toggleGif() {
      this.showGif = !this.showGif
    },
    setTab(tab){
      this.tab = tab
      this.state = 'init'
    },
    requestWithdrawal(){
      let _self = this
      let id = this.selectedWallet.id.replace(/-/g,'')

      console.log(id)
      id = ethers.utils.toUtf8Bytes(id);
      try {
        const { signer } = useEthers()
        this.socialClaimContract.connect(signer.value).requestWithdrawal(id).then(function(){
          _self.state = 'afterWithdrawalRequest'
        }, function(error) {
          console.log(error)
          _self.error = error.data.message
          _self.errorState = true
        })
      } catch (error) {
        console.log(error)
      }
    },
    withdraw() {
      let _self = this
      try {
        const { signer } = useEthers()
        this.socialClaimContract.connect(signer.value).withdraw(_self.withdrawAddress).then(function(){
          _self.state = 'afterWithdraw'
        }, function(error) {
          console.log(error)
          _self.error = error.data.message
          _self.errorState = true
        })
      } catch (error) {
        console.log(error)
      }
    },
    selectItemEventHandler(item) {
      const _self = this
      const claimWallet = this.wallets.find(function(wallet){ return wallet.description === item})
      this.axios.get(`${this.socialClaimApiURL}/wallets/${claimWallet.id}`)
          .then(function (response) {
            console.log(response)
            _self.selectedWallet = JSON.parse(response.data).result
          })
          .catch(function () {
          }).then(function(){
      })
    },
    loadWallets() {
      let _self = this
      _self.walletsLoading = true
      this.axios.get(this.socialClaimApiURL+'/wallets')
          .then(function (response) {
            _self.wallets = JSON.parse(response.data).result.slice().reverse()
            _self.walletsURLs = _self.wallets.map(function(w) { return w.description })
            if (_self.tab === 1)
              _self.state = 'afterSelectWalletToClaim'
            _self.walletsErrorState = false
          })
          .catch(function (error) {
            console.log(error)
            _self.walletsErrorState = true
          }).then(function(){
            _self.walletsLoading = false
          })
    },
    requestWalletCreation(url) {
      let _self = this
      try {
        const { signer } = useEthers()
        this.socialClaimContract.connect(signer.value).requestWalletCreation(url).then(function(){
          _self.state = 'afterWalletCreationRequest'
        }, function(error) {
          _self.error = error.data.message
          _self.errorState = true
        })
      } catch (error) {
        console.log(error)
      }
    },
    doCopy(address) {
      copyText(address)
    },
    transfer() {
      try {
        const { signer } = useEthers()
        const validationData =  ethers.utils.defaultAbiCoder.encode(['uint256'], [0])
        this.linkContract.connect(signer.value).transferAndCall(this.socialClaimContractAddress, ethers.utils.parseUnits(this.linkAmount.toString(), 18), validationData).then(function(){
        })
      } catch (error) {
        console.log(error)
      }
    },
    checkBalance() {
      try {
        const { signer } = useEthers()
        const validationData =  ethers.utils.defaultAbiCoder.encode(['uint256'], [0])
        this.linkContract.connect(signer.value).transferAndCall(this.socialClaimContractAddress, ethers.utils.parseUnits("0", 18), validationData).then(function(){
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
}

</script>
