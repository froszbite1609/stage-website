<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>
<template>
    <main class="grid grid-cols-12 gap-6 px-[250px] pt-24 pb-12">
        <NavBar />
        <slot />
    </main>
</template>
