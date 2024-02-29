<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PostMenu from '@/components/PostMenu.vue'
import CreateComment from '@/components/CreateComment.vue'
import SortComp from '@/components/SortComp.vue'
</script>
<template>
    <MainLayout>
        <article
            class="flex flex-col basis-9/12 gap-4 p-4 bg-bgSoft-light dark:bg-bgSoft-dark border rounded border-divider-light dark:border-divider-dark"
        >
            <!-- Header -->
            <section>
                <p class="text-xs text-textSecondary-light dark:text-textSecondary-dark">
                    <!-- Category -->
                    <span class="text-textPrimary-light dark:text-textPrimary-dark font-bold">
                        Scholarship
                    </span>
                    • Posted by Weroniczka/@66025010 2 weeks
                </p>
                <!-- Title -->
                <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                    ขอสอบถามหน่อยครับ ชั่วโมง กยศ.
                    เขาเก็บกี่ชั่วโมงหรอครับแล้วเขาเก็บเป็นรายเทอมหรือรายปีครับ
                    คือตอนนี้ผมยังไม่ได้เก็บเลยสักชั่วโมงมีพี่ๆเพื่อนๆคนไหนแนะนำที่เก็บ กยศ.
                    ชั่วโมงเยอะๆไหมครับ
                </h1>
            </section>

            <!-- Image -->
            <section>
                <img v-if="image" :src="image" class="max-h-80 w-full object-cover" />
            </section>

            <!-- Body -->
            <section>
                <p
                    v-html="replaceBrTags"
                    class="text-textSecondary-light dark:text-textSecondary-dark"
                ></p>
            </section>

            <!-- Post menu -->
            <PostMenu />

            <!-- Create comment -->
            <CreateComment />

            <!-- Sorting comment -->
            <SortComp />

            <!-- Comment(s)  -->
        </article>
    </MainLayout>
</template>
<script lang="ts">
export default {
    data() {
        return {
            post: {
                content: ``
            }
        }
    },
    props: {
        image: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    },
    computed: {
        replaceBrTags() {
            return this.post.content.replace(/\n/g, '<br>')
        }
    }
}
</script>
