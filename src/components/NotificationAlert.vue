<template>
    <section class="flex flex-col">
        <h1 class="text-2xl font-bold text-textPrimary-light dark:text-textPrimary-dark">
            {{ heading }}
        </h1>
        <p class="text-xs text-textSecondary-light dark:text-textSecondary-dark">
            {{ description }}
        </p>
    </section>
</template>
<script setup lang="ts">
defineProps({
    heading: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})
</script>
