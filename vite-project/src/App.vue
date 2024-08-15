<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
// import HeroSection from '@components/HeroSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="flex flex-row items-center justify-center space-x-4 bg-slate-400 py-4 px-8 shadow-lg sticky left-0 right-0 top-0 mb-4">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    </div>
  <!-- <HeroSection /> -->
  <HelloWorld msg="Vite + Vue" />

  <SiteFooter msg="fin" />

</template>

 