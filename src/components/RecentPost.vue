<template>
    <RouterLink :to="src" class="flex flex-row gap-[7px]">
        <!-- Image -->
        <section v-if="image" class="w-1/3">
            <img :src="image" />
        </section>

        <!-- Content -->
        <section class="w-full">
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
