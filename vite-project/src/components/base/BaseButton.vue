<template>
    <button class="btn" :class="classes" >{{ text }}</button>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'

defineProps({
    text: String,
    classes: String
})

</script>