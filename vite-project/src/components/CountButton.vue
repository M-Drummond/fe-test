<script setup lang="ts">
import { useCounterStore } from  '../stores/PiniaStore.ts'
const cs = useCounterStore()
</script>

<template>
    <buttton class="p-4 bg-green-100 btn"@click="cs.increment()">Add 1</buttton>
</template>