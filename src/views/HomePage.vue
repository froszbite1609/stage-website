<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import VerticalLayout from '@/layouts/VerticalLayout.vue'
import CreatePost from '@/components/CreatePost.vue'
import PostShow from '@/components/PostShow.vue'
</script>
<template>
    <MainLayout>
        <VerticalLayout>
            <CreatePost />

            <PostShow src="/food/food_1" category="Food" date="7 hours ago" title="Food 1" />

            <PostShow
                src="/lifestyle/lifestyle_2"
                category="Lifestyle"
                date="7 hours ago"
                title="Lifestyle 2"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque. Leo urna molestie at elementum eu. In ante metus dictum at tempor commodo ullamcorper. Risus ultricies tristique nulla aliquet. Consequat mauris nunc congue nisi vitae. Purus semper eget duis at tellus at urna condimentum mattis. At augue eget arcu dictum varius duis at consectetur lorem. Dui sapien eget mi proin sed libero enim sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Aliquam etiam erat velit scelerisque."
            />

            <PostShow
                src="/scholarship/scholarship_2"
                category="Scholarship"
                date="1d"
                title="Scholarship 2"
                content=""
            />

            <PostShow
                src="/studying/studying_1"
                category="Studying"
                date="30/02/65"
                title="Studying 1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque. Leo urna molestie at elementum eu. In ante metus dictum at tempor commodo ullamcorper. Risus ultricies tristique nulla aliquet. Consequat mauris nunc congue nisi vitae. Purus semper eget duis at tellus at urna condimentum mattis."
            />
        </VerticalLayout>
    </MainLayout>
</template>
