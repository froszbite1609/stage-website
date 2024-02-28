<template>
    <RouterLink class="text-textSecondary-light dark:text-textSecondary-dark font-bold" :to="src">
        {{ category }}
    </RouterLink>
</template>
<script setup lang="ts">
defineProps({
    src: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    }
})
</script>
