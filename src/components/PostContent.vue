<script setup lang="ts">
import SortComp from '@/components/SortComp.vue'
</script>
<template>
    <article
        class="col-span-9 bg-bgSoft-light dark:bg-bgSoft-dark border rounded border-divider-ligth dark:border-divider-dark p-4 flex flex-col gap-4"
        v-if="post"
    >
        <!-- Header -->
        <section>
            <p class="text-textSecondary-light dark:text-textSecondary-dark">
                <!-- Category -->
                <span class="text-textPrimary-light dark:text-textPrimary-dark font-bold">{{
                    post.category
                }}</span>
                • Posted by {{ post.posted_by }} {{ post.date }}
            </p>
            <!-- Title -->
            <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                {{ post.title }}
            </h1>
        </section>

        <!-- Image -->
        <section>
            <img
                src="https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="max-h-xs"
            />
        </section>

        <!-- Body -->
        <section>
            <p class="text-textSecondary-light dark:text-textSecondary-dark">
                {{ post.content }}
            </p>
        </section>

        <SortComp />
    </article>
</template>
<script lang="ts">
export default {
    data() {
        return {
            post: null
        }
    },
    created() {
        const storedPost = localStorage.getItem('post')
        if (storedPost) {
            this.post = JSON.parse(storedPost)
        }
    }
}
</script>
