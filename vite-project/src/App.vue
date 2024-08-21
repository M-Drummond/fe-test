<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import HeroSection from './components/HeroSection.vue'
// import SiteFooter from './components/SiteFooter.vue'

import TheNavbar from './components/TheNavbar.vue'

import BaseButton from './components/base/BaseButton.vue'

import CountDisplay from './components/CountDisplay.vue'

import CountButton from './components/CountButton.vue'

</script>

<template>
  <TheNavbar />

  <div class="w-full flex flex-row items-center space-x-4 mx-auto text-center max-w-sm">

    <CountButton />
    <CountDisplay />
    
  </div>
  
  <div class="max-w-screen-md mx-auto text-center my-8">
    <BaseButton :classes="'btn-primary'" text="button text"/>
  </div>

</template>