<template>
    <div class="navbar sticky top-0 bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle" @click="toggleDropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul v-if="dropdownOpen" tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a href="#">Homepage</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost btn-circle" @click="search">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <button class="btn btn-ghost btn-circle" @click="toggleNotification">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span v-if="hasNotifications" class="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </button>
        </div>
    </div>  
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

// Define props with type
const props = defineProps<{
    dropdownOpen?: boolean;
}>();

// Define emits if you need to emit events
const emit = defineEmits<{
    (e: 'update:dropdownOpen', value: boolean): void;
}>();

// Define reactive properties
const dropdownOpen = ref(props.dropdownOpen ?? false);
const hasNotifications = ref(true); // Set this based on your notification logic

function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value;
    emit('update:dropdownOpen', dropdownOpen.value);
}

function search() {
    // Handle search functionality
    console.log('Search button clicked');
}

function toggleNotification() {
    // Handle notification toggle
    console.log('Notification button clicked');
}
</script>


<style scoped>
/* Add your scoped styles here */
</style>