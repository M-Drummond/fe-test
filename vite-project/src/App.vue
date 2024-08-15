<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import HeroSection from './components/HeroSection.vue'
// import SiteFooter from './components/SiteFooter.vue'

import CountDisplay from './components/CountDisplay.vue'

import CountButton from './components/CountButton.vue'

</script>

<template>

  <div class="w-full flex flex-row items-center space-x-4 mx-auto text-center max-w-sm bg-purple-300">

    <CountButton />
    <CountDisplay />

  </div>

</template>