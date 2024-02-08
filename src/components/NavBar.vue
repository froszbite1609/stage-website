<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import 'primeicons/primeicons.css'

const isDark = useDark({
    selector: 'body',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
    disableTransition: false
})

const toggleDark = useToggle(isDark)
</script>

<template>
    <header class="bg-white dark:bg-[#1A1A1A] w-full fixed top-0 left-0">
        <section class="w-4/5 mx-auto">
            <!-- Branding -->
            <section>
                <h1>Stage</h1>
            </section>

            <!-- Menu -->
            <section>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/notifications">Notifications</RouterLink>
                </li>
                <li>
                    <section
                        class="relative w-[40px] h-[22px] bg-[#F1F1F1] dark:bg-[#2F2F2F] border rounded-[11px] border-[#3C3C3C1F] dark:border-[#5454547A] cursor-pointer"
                        @click="toggleDark()"
                    >
                        <section
                            class="absolute bg-white dark:bg-black w-[18px] h-[18px] rounded-full top-px start-px dark:translate-x-full flex items-center justify-center"
                        >
                            <span class="dark:hidden">
                                <i class="pi pi-sun text-xs text-[#3C3C3CB3]"></i>
                            </span>
                            <span class="hidden dark:inline-block">
                                <i class="pi pi-moon text-xs text-[#FFFFFFDE]"></i>
                            </span>
                        </section>
                    </section>
                </li>
            </section>
        </section>
    </header>
</template>
