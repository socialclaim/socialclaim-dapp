<template>

  <div v-if="challenge">
    <span class="font-medium">Challenge <span class="text-xs text-white align-middle" >
                      <span @mouseover="toggleTooltip(0, true)" @mouseleave="toggleTooltip(0, false)" data-tooltip-target="tooltip-bottom"><img class="w-4 inline-block" src="/images/question-circle.svg"></span>
                      <span v-if="tooltips[0]" id="tooltip-dark" role="tooltip" class="absolute z-50 py-2 px-3 text-sm font-medium text-white bg-secondary border border-white rounded-lg shadow-sm  tooltip ">
                          <span class="text-white"><img class="mt-2" src="/images/demo.gif" /></span>
                          <div class="tooltip-arrow" data-popper-arrow></div>
                        </span>
                    </span> - </span> <a class=" underline text-gray-300 text-xs" @click="doCopy()">COPY</a><br />
    <input disabled="disabled" :value="challenge" type="text" id="twitter"  class="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
  </div>

  <div v-if="state === 'afterWithdrawalRequest'" class=" max-w-md bg-white rounded-lg  shadow-md shadow-white dark:bg-gray-800 dark:border-gray-700">
    <div class="px-4 pb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-secondary dark:text-white  " role="alert">
      <svg  class="inline-block w-10 h-10 mr-2 text-gray-100 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#ff9719"/>
      </svg>
      <span class="font-medium inline-block">Waiting for challenge to be generated...<br /> Please do not close the window</span>
    </div>
  </div>

  <div v-if="state === 'afterWalletCreationRequest'" class=" max-w-md bg-white rounded-lg  shadow-md shadow-white dark:bg-gray-800 dark:border-gray-700">
    <div class=" px-4 pb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-secondary dark:text-white  " role="alert">
      <svg  class="inline-block w-10 h-10 mr-2 text-gray-100 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#ff9719"/>
      </svg>
      <span class="font-medium inline-block">Waiting for wallet to be generated...<br /> Please do not close the window</span>
    </div>
  </div>
  <div v-if="state === 'afterChallengeRecieved'" class="align-top mt-5 max-w-md bg-white rounded-lg  shadow-md shadow-white dark:bg-gray-800 dark:border-gray-700">
    <div class="flex px-4 pb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-secondary dark:text-white  " role="alert">
      <svg  class="inline-block w-10 h-10 mr-2 text-gray-100 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#ff9719"/>
      </svg>
      <span class="font-medium">Copy the challenge, then waiting for your manual confirmation...</span>
    </div>
  </div>

  <div v-if="state === 'afterWithdraw'" class="align-top mt-5 max-w-md bg-white rounded-lg  shadow-md shadow-white dark:bg-gray-800 dark:border-gray-700">
    <div class=" px-4 pb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-secondary dark:text-white  " role="alert">
      <svg  class="inline-block w-10 h-10 mr-2 text-gray-100 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#ff9719"/>
      </svg>
      <span class="font-medium">Verifying and withdrawing...</span>
    </div>
  </div>

  <div v-if="state === 'afterWithdrawalSuccessful'" class="align-top mt-5 max-w-md bg-white rounded-lg  shadow-md shadow-white dark:bg-gray-800 dark:border-gray-700">
    <div class="flex px-4 pb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-secondary dark:text-white  " role="alert">

      <span class="font-medium">✅ Withdrawal successful ! Please look at the withdrawal history above to check the transaction (can take up to a few hours to process)</span>
    </div>
  </div>


  <div v-if="errorState === true" class="align-top mt-5 max-w-md bg-white rounded-lg  shadow-md shadow-white dark:bg-gray-800 dark:border-gray-700">
    <div class="flex px-4 pb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-secondary dark:text-white  " role="alert">
      <span class="font-medium">❌ {{ error }}</span>
  </div>
  </div>

  <div v-if="state === 'afterWithdrawalError'" class="align-top mt-5 max-w-md bg-white rounded-lg  shadow-md shadow-white dark:bg-gray-800 dark:border-gray-700">
    <div class="flex px-4 pb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-secondary dark:text-white  " role="alert">
      <span class="font-medium">❌ Withdrawal error, please try again</span>    </div>
  </div>
</template>
<script>
import { copyText } from 'vue3-clipboard'

export default {
  props: ['state', 'challenge', 'error', 'errorState'],
  data() {
    return {
      tooltips: [false]
    }
  },
  methods: {
    doCopy() {
      copyText(this.challenge)
    },
    toggleTooltip(index, show) {
      this.tooltips[index] = show
    },
  }
}
</script>

