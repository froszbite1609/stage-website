<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import VerticalLayout from '@/layouts/VerticalLayout.vue'
import PostShow from '@/components/PostShow.vue'
</script>
<template>
    <MainLayout>
        <VerticalLayout>
            <PostShow src="/food/food_1" category="Food" date="7 hours ago" title="Food 1" />
        </VerticalLayout>
    </MainLayout>
</template>
