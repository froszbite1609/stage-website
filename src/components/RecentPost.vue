<template>
    <RouterLink :to="src" class="flex gap-[7px]">
        <!-- Image -->
        <section>
            <img class="h-[44px] w-[51px]" :src="image" />
        </section>

        <!-- Content -->
        <section class="">
            <h1 class="text-base font-bold text-textPrimary-light dark:text-textPrimary-dark">
                {{ title }}
            </h1>
            <p
                class="text-xs text-textSecondary-light dark:text-textSecondary-dark font-normal normal-case"
            >
                {{ point }} points • {{ comment }} comments • {{ date }}
            </p>
        </section>
    </RouterLink>
</template>
<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ''
    },
    point: {
        type: String,
        default: '0'
    },
    comment: {
        type: String,
        default: '0'
    },
    date: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    src: {
        type: String,
        default: ''
    }
})
</script>
