<script lang="ts">
import PostMenu from './PostMenu.vue'
</script>
<template>
    <RouterLink
        :to="src"
        class="bg-bgSoft-light dark:bg-bgSoft-dark border rounded border-divider-light dark:border-divider-dark p-4 flex flex-col gap-4"
    >
        <!-- Header -->
        <section>
            <p class="text-xs text-textSecondary-light dark:text-textSecondary-dark">
                <!-- Category -->
                <span class="text-textPrimary-light dark:text-textPrimary-dark font-bold">{{
                    category
                }}</span>
                • Posted by {{ name }}/@{{ studentId }} {{ date }}
            </p>
            <!-- Title -->
            <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                {{ title }}
            </h1>
        </section>

        <!-- Image -->
        <section>
            <img :src="image" class="max-h-xs" />
        </section>

        <!-- Body -->
        <section>
            <p class="text-textSecondary-light dark:text-textSecondary-dark">
                {{ content }}
            </p>
        </section>

        <!-- Post menu -->
        <PostMenu />
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
    },
    name: {
        type: String,
        default: 'Aranchai Moonkum'
    },
    date: {
        type: String,
        default: ''
    },
    studentId: {
        type: String,
        default: '66025010'
    },
    title: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque. Leo urna molestie at elementum eu. In ante metus dictum at tempor commodo ullamcorper. Risus ultricies tristique nulla aliquet. Consequat mauris nunc congue nisi vitae. Purus semper eget duis at tellus at urna condimentum mattis. At augue eget arcu dictum varius duis at consectetur lorem. Dui sapien eget mi proin sed libero enim sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Aliquam etiam erat velit scelerisque.'
    }
})
</script>
