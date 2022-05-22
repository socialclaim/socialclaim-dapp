<style>
body {
  background-image: url("/images/so-white.png");
}
</style>

<template>
  <div>
    <TheHeader />
    <Hero />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader"
import Hero from "../components/homepage/Hero"

export default {
  components: {
    Hero,
    TheHeader
  }
}
</script>
