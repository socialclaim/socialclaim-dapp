<style>

.vcpg[data-v-63943e43] {
  width: 100%;
  border-radius: 12px 12px 0 0;
}

.vcpg[data-v-63943e43] .vcp * {
  box-sizing: border-box
}

.vcpg[data-v-63943e43] .vcp__header {
  background-color: #FFF;
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
  color: #ABABAB
}

.vcp__header-icon[data-v-64321428] {
  display: flex;
  align-items: center;
  transition: transform .3s cubic-bezier(.5, .25, 0, 1);
  color: #ABABAB
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
</style>
<template>
  <section id="verify" >
    <div class="grid grid-cols-1 md:grid-cols-2 px-4  pb-20 gap-6 mx-auto max-w-screen-lg">
      <div class="mt-12" v-if="!isActivated">
        <div class="font-bold leading-relaxed mt-16 lg:text-5xl ">
          Let the Crypto 🌎<br /> know you are the <span class="text-secondary underline">right</span> person
        </div>
        <h2 class="text-md  md:mt-5 md:text-xl">Link your BSC wallet to your social media profiles</h2>
      </div>
      <div v-if="isActivated" class="md:mt-20">
        <vue-collapsible-panel-group class="rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700" accordion>
          <vue-collapsible-panel>
            <template #title >
              Setup
            </template>
            <template #content>
              <ul class="list-disc pl-6 text-md">
                <li class="mt-3">Install MetaMask and add the <a class="underline text-yellow-600" target="_blank" href="https://chainlist.org/chain/97">Binance Smart Chain test network</a></li>
                <li class="mt-3">
                  Request Test <span class="text-yellow-600">$BNB</span> <a target="_blank" class="underline text-yellow-600" href="https://testnet.binance.org/faucet-smart">Here</a>
                  and <span class="text-secondary ">$LINK</span> <a target="_blank" class="underline text-secondary" href="https://faucets.chain.link/chapel">Here</a>
                </li>
                <li  class="mt-3">Make sure your  <span class="text-secondary ">$LINK </span> is <a target="_blank" class="underline text-secondary" href="https://consensys.net/blog/metamask/how-to-add-your-custom-tokens-in-metamask/"> displayed in MetaMask</a></li>
              </ul>
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>
              Step 1 : Transfer
            </template>
            <template #content>
              <ul class="list-disc pl-6 text-md">
                <li class="mt-3">Use the transfer button to send us some <span class="text-secondary ">$LINK </span> so we can request data for you. </li>
                <li  class="mt-3">Cost is : <span class="text-secondary ">0.1 $LINK</span> to initiate the verification and <span class="text-secondary ">0.1 $LINK</span> per verification attempt</li>
              </ul>
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title >
              Step 2 : Start the verification process
            </template>
            <template #content>
              <ul class="list-disc pl-6 text-md">
                <li class="mt-3">Enter the URL you want to verify</li>
                <li  class="mt-3">Click <span class="text-secondary ">Start Verification</span> and wait for the challenge to be displayed</li>
                <li  class="mt-3">Copy the challenge in the Bio of the social media you selected <a class=" cursor-pointer"  @click="toggleGif()">ℹ️</a>
                  <img v-show="showGif" src="/images/demo.gif" />
                </li>
                <li  class="mt-3">Click <span class="text-secondary ">Verify</span></li>
              </ul>
            </template>
          </vue-collapsible-panel>
        </vue-collapsible-panel-group>
        <div class="mt-4" v-if="state==='init'"></div>
        <div class="mt-28"  v-else></div>
      </div>
      <div class="md:mt-20 relative cursor-pointer outline-none">
        <div class="px-4 pt-4 max-w-md bg-white rounded-lg border shadow-md  dark:bg-gray-800 dark:border-gray-700">
          <div class="flex  items-center mb-2 pb-2 border-b-4 border-gray-200">
            <img src="/images/logos/wallet.svg"  class="fill-cyan-500 pt-2 text-secondary block object-contain h-16" />
            <div v-if="!isActivated" >
              <a @click="open">
                <h5 class="ml-3 text-xl font-bold leading-none text-gray-900 dark:text-white">Wallet not connected<br />
                  <span  class="text-xs text-gray-500 font-light">Connect with metamask</span></h5>
              </a>
            </div>
            <div v-else class="flex items-center">
              <h5 class="ml-3 text-xl font-bold leading-none text-gray-900 dark:text-white">{{  shortenAddress(address) }}<br />
                <span class="text-xs text-gray-500 font-light">{{ displayEther(balance) }} TBNB</span></h5>
              <div class="flex-col ml-5">
                <div>
                  <label for="transfer" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                  <div class="relative">
                    <input type="number" step=".1" id="transfer" v-model="linkAmount" class="block p-4  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.2" required>
                    <button @click="transfer()" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send $LINK</button>
                  </div>
                </div>
                <div>
                  <span class="text-xs text-gray-500 font-light" >$LINK Credits : <span v-if="linkBalance">{{linkBalance}}</span><span v-else> <a class="text-xs text-secondary" @click="checkBalance()">Get balance</a></span></span>
                </div>
              </div>
            </div>
          </div>

          <Notifications :state="state" :errorState="errorState" :challenge="challenge" :error="error"/>

          <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
              <li class="py-5" data-aos="zoom-in" >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img class="w-12 h-12" src="/images/twitter.svg" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                    <form>
                      <input :disabled="!isActivated || tiktok.url.length > 0 || twitch.url.length > 0" type="text" id="twitter" v-model="twitter.url" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://twitter.com/username" required>
                      <span v-if="twitter.url.length > 0">
            <label class="text-xs text-secondary" for="twitter_element">Current valid twitter Bio HTML selector :</label>
            <input disabled="disabled" :value="twitter.element" type="text" id="twitter_element" class="p-1 bg-gray-50 border border-gray-300 text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://twitter.com/username" required>
          </span>
                    </form>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img v-if="twitter.url.length === 0" src="/images/unverified.svg"  class="block object-contain h-12 " />
                  </div>
                </div>
                <div v-if="twitter.url.length > 0" class="mt-5">
                  <button v-if="state === 'init' || state === 'verificationSuccessful' || state === 'VerificationError'" v-on:click="requestVerification(twitter.url, twitter.element)" type="button" class=" w-full text-white bg-secondarymedium hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <img  src="/images/go.svg"  class="inline-block object-contain h-8 " />Start verification
                  </button>

                  <button v-else-if="state === 'afterChallengeRecieved'" v-on:click="verify()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <img  src="/images/go.svg"  class="inline-block object-contain h-5 " />Verify
                  </button>
                </div>
              </li>

              <li class="py-5" data-aos="zoom-in" >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img class="w-12 h-8 " src="/images/tiktok.svg" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                    <form>
                      <input :disabled="!isActivated  || twitter.url.length > 0 || twitch.url.length > 0" type="text" id="tiktok" v-model="tiktok.url" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://tiktok.com/@username" required>
                      <span v-if="tiktok.url.length > 0">
            <label class="text-xs text-secondary" for="twitter_element">Current valid Tiktok Bio HTML selector :</label>
            <input disabled="disabled" :value="tiktok.element" type="text" id="tiktok_element" class="p-1 bg-gray-50 border border-gray-300 text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://twitter.com/username" required>
          </span>
                    </form>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img v-if="tiktok.url.length === 0" src="/images/unverified.svg"  class="block object-contain h-12 " />
                  </div>
                </div>
                <div v-if="tiktok.url.length > 0" class="mt-5">
                  <button v-if="state === 'init' || state === 'verificationSuccessful' || state === 'VerificationError'" v-on:click="requestVerification(tiktok.url, tiktok.element)" type="button" class=" w-full text-white bg-secondarymedium hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <img  src="/images/go.svg"  class="inline-block object-contain h-8 " />Start verification
                  </button>

                  <button v-else-if="state === 'afterChallengeRecieved'" v-on:click="verify()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <img  src="/images/go.svg"  class="inline-block object-contain h-5 " />Verify
                  </button>
                </div>
              </li>
              <li class="py-5" data-aos="zoom-in" >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img class="w-12 h-12" src="/images/twitch.svg" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                    <form>
                      <input :disabled="!isActivated || twitter.url.length > 0 || tiktok.url.length > 0" type="url" id="twitch" v-model="twitch.url" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://twitch.com/username/about" required>
                      <span v-if="twitch.url.length > 0">
            <label class="text-xs text-secondary" for="twitter_element">Current valid Twitch 'About' HTML selector :</label>
            <input disabled="disabled" :value="twitch.element" type="text" id="twitch_element" class="p-1 bg-gray-50 border border-gray-300 text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://twitter.com/username" required>
            </span>
                    </form>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img v-if="twitch.url.length === 0" src="/images/unverified.svg"  class="block object-contain h-12 " />
                  </div>
                </div>
                <div v-if="twitch.url.length > 0" class="mt-5">

                  <button v-if="state === 'init' || state === 'verificationSuccessful' || state === 'VerificationError'" v-on:click="requestVerification(twitch.url, twitch.element)" type="button" class=" w-full text-white bg-secondarymedium hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <img  src="/images/go.svg"  class="inline-block object-contain h-8 " />Start verification
                  </button>

                  <button v-else-if="state === 'afterChallengeRecieved'" v-on:click="verify()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <img  src="/images/go.svg"  class="inline-block object-contain h-5 " />Verify
                  </button>
                </div>
              </li>

              <li class="py-5" data-aos="zoom-in" >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="flex-1 min-w-0 relative">
                      <img src="/images/logo.svg"  class="block  h-10 w-8 ml-10" />
                      <div class="absolute left-0   bottom-0"><div class=" bg-black ml-0  mt-1 md:mt-0 text-xs rounded-xl text-white px-2 font-bold">Verified</div></div>
                    </div>
                  </div>

                  <div class="flex-1 min-w-0">
                    <div class=" text-gray-500 text-sm ">Will allow to verify most websites without a login wall. More will be added soon when the DAO is live !</div>
                  </div>
                  <div class="inline-flex">
                    <div class="w-6"></div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useBoard, useEthers, displayEther, shortenAddress, useEthersHooks } from 'vue-dapp'
import AOS from "aos"
import { ethers } from "ethers"
import VerifiedAbi from "../../abis/verified.json"
import LinkAbi from "../../abis/link.json"
import Notifications from "../../components/Notifications"

export default {
  setup() {
    const { open } = useBoard()
    const { address, balance, chainId, signer } = useEthers()

    const verifiedInterface = new ethers.utils.Interface(VerifiedAbi)
    const linkInterface = new ethers.utils.Interface(LinkAbi)
    const linkTokenContractAddress = process.env.VUE_APP_LINK_CONTRACT_ADDR
    const verifiedContractAddress = process.env.VUE_APP_VERIFIED_CONTACT_ADDR
    const requiredChainId = process.env.VUE_APP_REQUIRED_CHAIN_ID
    let provider = new ethers.providers.JsonRpcProvider(process.env.VUE_APP_RPC_PROVIDER)
    const linksigner = provider.getSigner()

    const linkContract = new ethers.Contract(
        linkTokenContractAddress,
        linkInterface,
        linksigner
    );

    const verifiedContract = new ethers.Contract(
        verifiedContractAddress,
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
      verifiedContractAddress,
      verifiedContract,
      signer,
      requiredChainId
    };
  },
  components: {
    Notifications
  },
  mounted() {
    const { address } = useEthers()
    let _self = this
    AOS.init({ })
    const { onActivated, onChanged } = useEthersHooks()

    onActivated(({ provider }) => {
      if (provider.network.chainId.toString() === this.requiredChainId)
        this.isActivated = true
      else
        alert(`Please re-connect using the Binance Smart Chain Testnet (ID: ${this.requiredChainId})`)
    })

    onChanged(({ provider }) => {
      if (provider.network.chainId.toString() === this.requiredChainId)
        this.isActivated = true
      else
        alert(`Please re-connect using the Binance Smart Chain Testnet (ID: ${this.requiredChainId})`)
    })

    this.verifiedContract.on("PaymentSet", (addr, balance) => {
      if (address.value === addr) {
        _self.linkBalance = balance / 1000000000000000000
      }
    });

    this.verifiedContract.on("ValidationUpdate", (addr, challenge) => {
      if (address.value === addr && challenge.toString() !== "0") {
        this.challenge = challenge.toString()
        _self.state = 'afterChallengeRecieved'
        _self.errorState = false
      }
    });

    this.verifiedContract.on("VerificationResult", (addr, verified) => {
      if (address.value === addr) {
        _self.state = (verified ? 'verificationSuccessful' : 'VerificationError')
        _self.twitter.url = ''
        _self.tiktok.url = ''
        _self.twitch.url = ''
        _self.errorState = false
        _self.challenge = ''
        _self.linkAmount = null
      }
    });
  },
  data() {
    return {
      state: "init",
      errorState: false,
      linkBalance: null,
      challenge: "",
      linkAmount: .2,
      showGif: false,
      isActivated: false,
      error: "unknown error, please try again",
      twitter: {url: "", element: "div#react-root div > div > div > div:nth-child(3) > div > div > span"},
      tiktok: {url: "", element: "h2[data-e2e='user-bio']"},
      twitch: {url: "", element: "div[data-a-target='about-panel']"}
    };
  },
  methods: {
    toggleGif() {
      this.showGif = !this.showGif
    },
    requestVerification(url, path) {
      let _self = this
      try {
        const { signer } = useEthers()
        this.verifiedContract.connect(signer.value).requestVerification(url, path).then(function(){
          _self.state = 'afterVerificationRequest'
        }, function(error) {
          _self.error = error.data.message
          _self.errorState = true
        })
      } catch (error) {
        console.log(error)
      }
    },
    verify() {
      let _self = this
      try {
        const { signer } = useEthers()
        this.verifiedContract.connect(signer.value).verify().then(function(){
          _self.state = 'afterManualVerification'
        }, function(error) {
          _self.error = error.data.message
          _self.errorState = true
        })
      } catch (error) {
        console.log(error)
      }
    },
    transfer() {
      try {
        const { signer } = useEthers()
        const validationData =  ethers.utils.defaultAbiCoder.encode(['uint256'], [0])
        this.linkContract.connect(signer.value).transferAndCall(this.verifiedContractAddress, ethers.utils.parseUnits(this.linkAmount.toString(), 18), validationData).then(function(){
        })
      } catch (error) {
        console.log(error)
      }
    },
    checkBalance() {
      try {
        const { signer } = useEthers()
        const validationData =  ethers.utils.defaultAbiCoder.encode(['uint256'], [0])
        this.linkContract.connect(signer.value).transferAndCall(this.verifiedContractAddress, ethers.utils.parseUnits("0", 18), validationData).then(function(){
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
}

</script>
