<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import 'primeicons/primeicons.css' // Use SVG icons.

const isDark = useDark({
    selector: 'body',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
    disableTransition: false // Enable transition.
})

const toggleDark = useToggle(isDark)
</script>

<template>
    <header
        class="fixed bg-bgLight dark:bg-bgDark w-full top-0 left-0 border-b border-dividerLight-light dark:border-dividerLight-dark h-[56px]"
    >
        <section class="w-4/5 h-full mx-auto grid grid-cols-12 items-center">
            <!-- Branding -->
            <section class="col-span-6">
                <RouterLink
                    to="/"
                    class="text-textPrimary-light dark:text-textPrimary-dark font-bold"
                    >Stage</RouterLink
                >
            </section>

            <!-- Menu -->
            <section class="flex col-span-6 justify-end">
                <li class="list-none">
                    <RouterLink
                        to="/"
                        class="text-textPrimary-light dark:text-textPrimary-dark text-xs"
                        >Home</RouterLink
                    >
                </li>
                <li class="list-none ml-3">
                    <RouterLink
                        to="/notifications"
                        class="text-textPrimary-light dark:text-textPrimary-dark text-xs"
                    >
                        Notifications</RouterLink
                    >
                </li>

                <!-- Vertical line -->
                <i class="h-6 w-px ml-3 bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <!-- Toggle menu -->
                <li class="list-none ml-3 inline-flex items-center">
                    <section
                        class="relative w-[40px] h-[22px] bg-bgMute-light dark:bg-bgMute-dark border rounded-[11px] border-dividerLight-light dark:border-dividerLight-dark cursor-pointer"
                        @click="toggleDark()"
                    >
                        <section
                            class="absolute bg-white dark:bg-black w-[18px] h-[18px] rounded-full top-px start-px dark:translate-x-full flex items-center justify-center"
                        >
                            <span class="dark:hidden">
                                <i class="pi pi-sun text-xs text-textSecondary-light"></i>
                            </span>
                            <span class="hidden dark:inline-block">
                                <i class="pi pi-moon text-xs text-textPrimary-dark"></i>
                            </span>
                        </section>
                    </section>
                </li>

                <!-- User button -->
                <li class="list-none ml-3">
                    <RouterLink to="/saves">
                        <i
                            class="pi pi-user !leading-normal text-lg text-textSecondary-light dark:text-textSecondary-dark"
                        ></i>
                    </RouterLink>
                </li>

                <!-- Search button -->
                <li class="list-none ml-3">
                    <i
                        class="pi pi-search !leading-normal text-lg text-textSecondary-light dark:text-textSecondary-dark"
                    ></i>
                </li>
            </section>
        </section>
    </header>
</template>
