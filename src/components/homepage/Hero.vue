<style>
.vue-typer {

}
.vue-typer.text-secondary .custom.char {
  color: #0E73D3;
}

.vue-typer.underline .custom.char {
  text-decoration: underline;
}

.vue-typer .custom.char.selected {

}

.vue-typer .custom.caret {
  /*width: 8px;*/
  /*height: 40px;*/
  /*vertical-align: middle;*/
}

.vue-typer.no-caret .custom.caret {
  display: none;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
<template>
  <section >
    <button v-on:click="nextStep">next step</button>
    <div class="grid grid-cols-1 md:grid-cols-2 px-4  pb-20 gap-6 mx-auto max-w-screen-lg">
    <div class="mt-4" v-if="step===0">
      <div class="hidden lg:block font-extrabold leading-tight text-4xl mt-16 lg:text-5xl  md:h-48">

        <b>Let the crpyto 🌎 know you are the <span class="text-secondary underline">Right Person</span></b>


<!--        <b><vue-typer class="no-caret" :repeat='0' text="Let the crpyto 🌎        know you are the     "  initial-action='typing' :type-delay=40></vue-typer></b><br />-->
<!--        <b><vue-typer :pre-type-delay="1700" class="text-secondary no-caret" :repeat='0' text="Right Person"  initial-action='typing' :type-delay=40></vue-typer></b>-->
<!--        <b><vue-typer :pre-type-delay="2000" class="  no-caret" :repeat='0' text=" 🔒"  initial-action='typing' :type-delay=40></vue-typer></b><br/>-->
      </div>
      <div class="lg:hidden font-extrabold leading-tight text-4xl mt-5 lg:text-5xl md:h-32">
        <b>Your social media presence <span class="text-secondary underline">VERIFIED</span></b>
      </div>

      <h2 class="text-md mt-5 md:mt-0 md:text-xl">Link your BSC wallet to your social media profiles</h2>
<!--      <ul class="list-disc ml-4" data-aos="zoom-in" data-aos-delay=1100>-->
<!--        <li>-->
<!--          <h2 class="text-3xl md:text-xl font-bold" >-->
<!--            <span class="text-secondary"></span>{{$t('hero.line2.start')}} <span class="underline">{{$t('hero.line2.middle')}}</span> {{$t('hero.line2.middle2')}}-->
<!--            <span class="text-secondary">{{$t('hero.line2.end')}}</span>-->
<!--          </h2>-->
<!--        </li>-->
<!--        <li>-->
<!--          <h2 class="text-3xl md:text-xl font-bold" data-aos="zoom-in" >-->
<!--            <span class="text-secondary"></span>{{$t('hero.line3.start')}} <span class="underline">{{$t('hero.line3.middle')}}</span> {{$t('hero.line3.middle2')}}-->
<!--            <span class="text-secondary">{{$t('hero.line3.end')}}</span>-->
<!--          </h2>-->
<!--        </li>-->
<!--        <li>-->
<!--          <h2 class="text-3xl md:text-xl font-bold" data-aos="zoom-in" >-->
<!--            <span class="text-secondary"></span>{{$t('hero.line4.start')}} <span class="underline">{{$t('hero.line4.middle')}}</span> {{$t('hero.line4.middle2')}}-->
<!--            <span class="text-secondary">{{$t('hero.line4.end')}}</span>-->
<!--          </h2>-->
<!--        </li>-->
<!--      </ul>-->
      <div class="grid grid-cols-1 gap-2 max-w-md mt-6" >
        <div >
<!--          <a href="#forinfluencers" class="text-center hover:bg-black transform hover:scale-105 duration-500 w-full block bg-secondary text-white shadow rounded-md font-bold md:text-lg py-2">Test the proof of concept</a>-->
        </div>
        <div >
<!--          <a href="#forbuilders" class="text-center hover:bg-black transform hover:scale-105 duration-500 w-full block bg-secondary text-white shadow rounded-md font-bold md:text-lg py-2">For BUIDLers</a>-->
        </div>

<!--        <div class="text-center">-->
<!--          <a  href="/#savings-calculator" class="hover:bg-black transform hover:scale-105 duration-500 w-full	block bg-secondary text-white shadow rounded-md md:text-lg py-2" >{{$t('hero.button2')}}</a>-->
<!--        </div>-->
      </div>
    </div>
      <div class="mt-4" v-if="step===1">
        <div class="hidden lg:block font-extrabold leading-tight text-4xl mt-16 lg:text-5xl  md:h-48">
          <b>Step 1 : <span class="text-secondary underline">blabla </span></b>

        </div>
      </div>
      <div class="mt-4" v-if="step===2">
        <div class="hidden lg:block font-extrabold leading-tight text-4xl mt-16 lg:text-5xl  md:h-48">
          <b>Step 2 : <span class="text-secondary underline">blabla </span></b>

        </div>
      </div>
      <div class="mt-4" v-if="step===3">
        <div class="hidden lg:block font-extrabold leading-tight text-4xl mt-16 lg:text-5xl  md:h-48">
          <b>Step 3 : <span class="text-secondary underline">blabla </span></b>

        </div>
      </div>
      <div class="md:mt-20 relative cursor-pointer outline-none">
<!--              <img src="~/assets/images/gifs/hero.gif" class="w-full  flex-wrap object-cover  bg-center rounded-xl shadow-xl" alt="The best guy" />-->

      <div class="px-4 pt-4 max-w-md bg-white rounded-lg border shadow-md  dark:bg-gray-800 dark:border-gray-700">
        <div class="flex  items-center mb-2 pb-2 border-b-4 border-gray-200">
          <img src="/images/logos/wallet.svg"  class="fill-cyan-500 pt-2 text-secondary block object-contain h-16" />
          <h5 class="ml-3 text-xl font-bold leading-none text-gray-900 dark:text-white">Wallet not connected<br />
          <span class="text-xs text-gray-500 font-light">Connect with metamask</span></h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-5" data-aos="zoom-in" >
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img class="w-12 h-8 " src="/images/tiktok.svg" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">

                  <form>
                    <input type="text" id="tiktok" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://tiktok.com/@username" required>

                  </form>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src="/images/unverified.svg"  class="block object-contain h-12 " />
                </div>
              </div>
            </li>

            <li class="py-5" data-aos="zoom-in" >
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img class="w-12 h-12" src="/images/instagram.svg" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">

                  <form>
                    <input type="text" id="instagram" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://instagram.com/username" required>

                  </form>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src="/images/unverified.svg"  class="block object-contain h-12 " />
                </div>
              </div>
            </li>

            <li class="py-5" data-aos="zoom-in" >
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img class="w-12 h-12" src="/images/twitch.svg" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">

                  <form>
                    <input type="text" id="twitch" class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://twitch.com/username/about" required>

                  </form>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src="/images/unverified.svg"  class="block object-contain h-12 " />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--      <div class="flex-row absolute z-10" data-aos="zoom-in" data-aos-delay="1200">-->
<!--        <img src="~/assets/images/faces/xavier.png" class="w-64 flex-wrap object-cover  bg-center rounded-xl shadow-xl" alt="The best guy" />-->
<!--        <div class="flex-grow text-secondary text-md font-bold">Xavier, Mister prospection</div>-->
<!--      </div>-->
<!--      <div class="flex-row absolute top-0 right-0" data-aos="zoom-in" data-aos-delay="1400">-->
<!--        <div  class="flex-grow text-md font-bold text-right">Yann, Growth Developer</div>-->
<!--        <img src="~/assets/images/faces/yann.png" class="w-64 object-cover flex-wrap bottom-0 right-0 bg-center rounded-xl shadow-xl" alt="The best guy" />-->
<!--      </div>-->
    </div>
    </div>
    <div class="text-xl text-center">
      <b class="text-2xl">Handcrafted using :</b>
      <div class="max-w-2xl mx-auto grid grid-rows-3 gap-5 md:mb-0 md:flex items-center justify-center pb-12">
        <a target="_blank" href="https://www.bnbchain.world/en/smartChain"><img src="/images/partners/bsc.svg" class="w-32" alt="The best guy" /></a>
        <a target="_blank" href="https://www.chain.link"><img src="/images/partners/chainlink.svg" class="block w-32  flex-wrap " alt="The best guy" /></a>
        <a target="_blank" href="https://bscscan.com/"><img src="/images/partners/bscscan.svg" class="block w-32  flex-wrap " alt="The best guy" /></a>
      </div>
    </div>
  </section>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  beforeCreate () {
    this.$store.dispatch('web3/registerWeb3')
  },
  mounted() {
    AOS.init({ })
  },
  data() {
    return {
      step: 0
    };
    },
  methods: {
    nextStep () {
      this.step += 1;
    }
  },
}
</script>
