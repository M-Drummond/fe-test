<script setup lang="ts"> 

defineProps<{ msg: string }>()
 
</script>

<template>
    <div class="p-4 text-center bg-gray-200">
        <p>{{ msg }}</p>
    </div>
</template>