<template>
    <div class="mockup-code" :class="classes">
        <pre data-prefix="$"><code>{{ code }}</code></pre>
    </div>
</template>


<script setup lang="ts">

import { defineProps } from 'vue'

defineProps({
    code: String,
    classes: String
})

</script>