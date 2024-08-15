<script setup lang="ts">
import { useCounterStore } from  '../stores/PiniaStore.ts'
const cs = useCounterStore()
</script>


<template>
    <div class="text-3xl">
        {{ cs.count }}
    </div>
</template>