<script setup lang="ts">
import { useCounterStore } from '../stores/PiniaStore.ts'
const cs = useCounterStore()
</script>


<template>

    <div class="stats shadow">
        <div class="stat">
            <div class="stat-title">Total Clicks</div>
            <div class="stat-value">{{ cs.count }}</div>
            <div class="stat-desc">21% more than last month</div>
        </div>
    </div>

</template>