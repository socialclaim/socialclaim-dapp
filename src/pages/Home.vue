<style>
body {
  background-image: url("/images/so-white.png");
}
</style>

<template>
  <div>
    <TheHeader />
    <Hero />
    <Directory />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader"
import Hero from "../components/homepage/Hero"
import Directory from "../components/homepage/Directory"
import TheFooter from "../components/TheFooter"
export default {
  components: {
    Hero,
    TheHeader,
    Directory,
    TheFooter
  }
}
</script>
