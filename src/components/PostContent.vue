<script setup lang="ts">
import SortComp from '@/components/SortComp.vue'
import CreateComment from '@/components/CreateComment.vue'
import PersonalComment from '@/components/PersonalComment.vue'
</script>
<template>
    <article
        class="flex flex-col basis-9/12 gap-4 p-4 bg-bgSoft-light dark:bg-bgSoft-dark border rounded border-divider-light dark:border-divider-dark"
    >
        <!-- Header -->
        <section>
            <p class="text-textSecondary-light dark:text-textSecondary-dark">
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
            <img :src="image" class="max-h-80 w-full object-cover" />
        </section>

        <!-- Body -->
        <section>
            <p
                v-html="replaceBrTags"
                class="text-textSecondary-light dark:text-textSecondary-dark"
            ></p>
        </section>

        <!-- Create comment -->
        <CreateComment />

        <!-- Sorting comment -->
        <SortComp />

        <!-- Comment(s)  -->
        <section class="flex flex-col gap-4">
            <PersonalComment />
            <PersonalComment />
            <PersonalComment />
        </section>
    </article>
</template>
<script lang="ts">
export default {
    props: {
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
            type: Number,
            default: 66025010
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }
    },
    computed: {
        replaceBrTags() {
            return this.content.replace(/\r?\n/g, '<br />')
        }
    }
}
</script>
