<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
</script>
<template>
    <main class="flex flex-row gap-6 px-[250px] pt-24 pb-12">
        <NavBar />
        <slot />
        <SideBar />
    </main>
</template>
