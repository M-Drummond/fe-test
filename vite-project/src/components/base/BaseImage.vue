<template>
    <img :src="imgSrc" alt="Image" class="w-full h-auto" />
</template>

<script setup lang="ts">

import { defineProps } from 'vue'

defineProps({
    imgSrc: String
})

</script>