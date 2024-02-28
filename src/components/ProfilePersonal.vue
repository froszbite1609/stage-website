<template>
    <section class="relative">
        <section
            class="flex flex-col gap-3 broder rounded-t border-x-divider-light border-t-divider-light dark:border-x-divider-dark dark:border-divider-dark h-[49px] bg-mainColour-light dark:bg-mainColour-dark"
        >
            <img
                class="absolute top-[16%] left-[4%]"
                src="../assets/images/user.png"
                width="50"
                height="50"
            />
        </section>
        <!-- Information -->
        <section
            class="bg-bgSoft-light dark:bg-bgSoft-dark border rounded-b border-x-divider-light dark:border-x-divider-dark border-t-[0] border-b-divider-light dark:border-b-divider-dark p-[15px] pt-[30px]"
        >
            <h1 class="text-base font-bold text-textPrimary-light dark:text-textPrimary-dark">
                {{ name }}
            </h1>
            <p class="text-xs text-textSecondary-light dark:text-textSecondary-dark">{{ email }}</p>
        </section>
    </section>
</template>
<script setup lang="ts">
defineProps({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
})
</script>
