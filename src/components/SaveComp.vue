<template>
    <RouterLink :to="src" class="flex items-center">
        <section class="flex flex-row gap-4 items-center">
            <img v-if="image" :src="image" alt="Post Image" class="w-24" />
            <p class="font-bold text-textPrimary-light dark:text-textPrimary-dark">
                {{ text }}
            </p>
        </section>
    </RouterLink>
</template>

<script lang="ts">
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            default: ''
        }
    }
}
</script>
