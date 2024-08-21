<template>
    <div class="prose md:max-w-screen-[80char] prose-lg prose-zinc mx-auto dark:prose-invert" v-html="content"></div>
</template>

<script lang="ts" setup>
    defineProps({
        content: {
            type: String,
            required: true
        }
    })
</script>