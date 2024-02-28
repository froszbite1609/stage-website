<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import ProfilePersonal from '@/components/ProfilePersonal.vue'
import SideMenu from '@/components/SideMenu.vue'
</script>
<template>
    <main class="flex flex-row gap-6 px-[250px] pt-24 pb-12">
        <NavBar />
        <section class="flex flex-col basis-3/12 gap-4">
            <ProfilePersonal name="Weroniczka" email="66025010@up.ac.th" />
            <SideMenu />
        </section>
        <slot />
    </main>
</template>
