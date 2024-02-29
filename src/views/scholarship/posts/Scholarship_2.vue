<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PostMenu from '@/components/PostMenu.vue'
import CreateComment from '@/components/CreateComment.vue'
import SortComp from '@/components/SortComp.vue'
import PersonalComment from '@/components/PersonalComment.vue'
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
                    • Posted by Naphat/@66468925 7d
                </p>
                <!-- Title -->
                <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                    ตอนนี้เราเรียนอยู่คณะสาขาหนึ่งค่ะ แต่เรารู้สึกว่ามันไม่ใช่ทางเรา
                    เราเคยคิดที่จะย้ายค่ะ คือเราอยากรู้เรื่องว่าเรื่อง กยศ. ต้องย้ายยังไงหรอคะ
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
            <section class="flex flex-col gap-4">
                <PersonalComment
                    name="Phanupong"
                    content="ต้องยื่นเรื่องกับกองทุนการศึกษาของมหาลัยครับ"
                />
                <PersonalComment
                    name="Preapilai"
                    content="เอกสารให้ติดตามที่เพจของมหาลัยได้เลยค่ะ แล้วปีหน้าก็ขอยื่นใหม่"
                />
                <PersonalComment
                    name="Nannicha"
                    content="เค้าเคยย้ายสาขาต้องเริ่มทำเรื่องใหม่หมดเลยค่ะ แนะนำให้โทรหา กยศ. ของมหาลัยเพื่อความแน่ใจเลยค่ะ"
                />
            </section>
        </article>
    </MainLayout>
</template>
<script lang="ts">
export default {
    data() {
        return {
            post: {
                content: `ต้องเตรียมเอกสารอะไรยังไงหรอคะ พอดีเราทักไปถามทางเพจแล้วค่ะแต่เขายังไม่ตอบ ขอสอบถามผู้รู้หน่อยค่ะ`
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
