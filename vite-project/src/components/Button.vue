<template>
    <button class="bg-white text-black dark:text-white dark:bg-purple-600 p-4 rounded-full transition-shadow font-bold shadow-sm hover:shadow-md active:shadow-none">{{ text }}</button>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'

defineProps({
    text: String
})

</script>