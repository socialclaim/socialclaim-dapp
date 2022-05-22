

<template>
<header class="z-30 w-full px-2 md:py-1  bg-white  sm:px-4">
  <div class="container flex items-center justify-between mx-auto max-w-screen-lg">
    <a href="#" class="flex items-center pl-2">
      <Logo />
    </a>

<div class="md:hidden inline absolute right-">
  <a href="https://discord.gg/6qk9rPvZ" target="_blank"><img src="/images/logos/discord.svg"  class="inline-block object-contain h-6" /></a>
  <a href="https://twitter.com/Verfied_chain" target="_blank"><img src="/images/logos/twitter.svg"  class="inline-block object-contain h-6" /></a>
  <a href="https://calendly.com/verified-chain" target="_blank"><img src="/images/logos/telephone.svg"  class="inline-block object-contain h-6" /></a>
</div>
      <ul class="relative space-x-5 flex rtl:space-x-reverse h-12">
        <li class=" md:hidden pt-5 inline">

        </li>
        <li class="hidden lg:block ">
          <a href="https://discord.gg/6qk9rPvZ" target="_blank"><img src="/images/logos/discord.svg"  class="block object-contain h-6" /></a>

        </li>

        <li class="hidden lg:block">
          <a href="https://twitter.com/Verfied_chain" target="_blank"><img src="/images/logos/twitter.svg"  class="block object-contain h-6" /></a>
        </li>

        <li class="hidden lg:block ">
          <a href="https://calendly.com/verified-chain" target="_blank"><img src="/images/logos/telephone.svg"  class="block object-contain h-6" /></a>

        </li>

<!--          <nuxt-link class="text-gray-800 hover:text-gray-900 font-bold leading-3	" :to="localePath('/')">{{  $t('menu.home')}}</nuxt-link></li>-->
<!--        <li class="hidden lg:block relative"><a class=" block pt-3 pr-5 text-secondary font-bold  hover:text-gray-900" href="/verified.pdf">📑 Pitch deck</a></li>-->
<!--        <li class="hidden lg:block relative"><a class=" block pt-3 pr-5 text-gray-800  hover:text-gray-900" href="/#forinfluencers">For Influencers</a></li>-->
<!--        &lt;!&ndash;        <li class="hidden lg:inline-block"><nuxt-link class="text-gray-800 hover:text-gray-900" :to="localePath('/#savings-calculator')">{{  $t('menu.savingsCalculator') }}</nuxt-link></li>&ndash;&gt;-->
<!--        <li class="hidden lg:block relative"><a class=" block pt-3 pr-5 text-gray-800  hover:text-gray-900" href="/#forbuilders">For Builders</a></li>-->
<!--        <li class="hidden lg:block relative"><a class=" block pt-3 pr-5 text-gray-800  hover:text-gray-900" href="/#team">The team</a></li>-->
<!--        <li class="hidden lg:block relative"><a class=" block pt-3 pr-5 text-gray-800  hover:text-gray-900" href="/#training">Whitepaper</a><span class="absolute right-0 top-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white bg-secondarylight rounded-full">Q2 2022</span></li>-->
        <li class="hidden lg:block relative"><a class=" block pt-3 pr-5 text-gray-800  hover:text-gray-900" >Connect with metamask</a><span class="absolute right-0 top-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white bg-secondarylight rounded-full">BSC Testnet</span></li>

        <!--        <li class="hidden lg:block pt-3"><nuxt-link class="text-gray-800 hover:text-gray-900" :to="localePath('/faq')"> {{ $t('menu.faq') }}</nuxt-link></li>-->
      </ul>

  </div>
</header>
</template>

<script>
import Logo from "../components/Logo"

export default {
  components: {
    Logo
  },
  data() {
    return {
      one: false,
      open: false,
      two: false
    };
  },
methods: {
},
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
};
</script>
