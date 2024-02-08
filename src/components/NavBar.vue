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
    <header
        class="bg-background-light dark:bg-background-dark w-full fixed top-0 left-0 border-b border-divider-light-light dark:border-divider-light-dark h-[56px]"
    >
        <section class="w-4/5 h-full mx-auto grid grid-cols-12 items-center">
            <!-- Branding -->
            <section class="col-span-6">
                <h1 class="text-waikawa-950 dark:text-waikawa-50 font-bold">Stage</h1>
            </section>

            <!-- Menu -->
            <section class="flex col-span-6 justify-end">
                <li class="list-none">
                    <RouterLink to="/" class="text-waikawa-950 dark:text-waikawa-50 text-xs"
                        >Home</RouterLink
                    >
                </li>
                <li class="list-none ml-3">
                    <RouterLink
                        to="/notifications"
                        class="text-waikawa-950 dark:text-waikawa-50 text-xs"
                        >Notifications</RouterLink
                    >
                </li>

                <!-- Vertical line -->
                <i class="h-6 w-px ml-3 bg-divider-light-light dark:bg-divider-light-dark"></i>

                <!-- Toggle menu -->
                <li class="list-none ml-3">
                    <section
                        class="relative w-[40px] h-[22px] bg-background-mute-light dark:bg-background-mute-dark border rounded-[11px] border-divider-light-light dark:border-divider-light-dark cursor-pointer"
                        @click="toggleDark()"
                    >
                        <section
                            class="absolute bg-white dark:bg-black w-[18px] h-[18px] rounded-full top-px start-px dark:translate-x-full flex items-center justify-center"
                        >
                            <span class="dark:hidden">
                                <i class="pi pi-sun text-xs text-waikawa-900"></i>
                            </span>
                            <span class="hidden dark:inline-block">
                                <i class="pi pi-moon text-xs text-waikawa-100"></i>
                            </span>
                        </section>
                    </section>
                </li>

                <!-- User button -->
                <li class="list-none ml-3">
                    <RouterLink to="/profile">
                        <i class="pi pi-user text-lg text-waikawa-950 dark:text-waikawa-50"></i>
                    </RouterLink>
                </li>
            </section>
        </section>
    </header>
</template>
