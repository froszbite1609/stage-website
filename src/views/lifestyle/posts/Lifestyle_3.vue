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
                        Lifestyle
                    </span>
                    • Posted by Pimphorn/@66099999 7d
                </p>
                <!-- Title -->
                <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                    ถามคนชอบฟัง podcast ค่ะ ว่าชอบฟังอะไร รู้จักได้ยังไง รู้จากไหน
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
                    name="Rattana"
                    content="ส่วนมากเราอ่านที่คนแนะนำในพันทิป และ article ต่างๆค่ะ สนใจเรื่องไหนก็คีย์อันนั้นเอาค่ะ ส่วนตัวเราชอบฟังเรื่อง สังคม วัฒนธรรม จิตวิทยา ปรัชญา ฯลฯ"
                />
                <PersonalComment
                    name="Chonticha"
                    content="ของไทย ที่เราฟังบ่อยๆก็ Omnivore WiTcast และความสุขโดยสังเกต ของต่างประเทศ เราชอบฟัง Philosophy bites / TED Radio hour / Invisiblia พวกนี้ค่ะ ปล. เราเพิ่งทำ Podcast กับเพื่อน ชื่อ PERcast เกี่ยวกับการตั้งคำถามกับสิ่งรอบตัว แต่ละวีคจะคุยเรื่องต่างๆกันไปค่ะ"
                />
                <PersonalComment
                    name="Wachakorn"
                    content="แนะนำให้ลองฟัง podcast ของ 'The Standard' ปกติแล้วเราเป็นคนชอบอ่านหนังสือ เพราะรู้สึกว่าการได้เห็นตัวหนังสือจะทำให้เราจดจำเรื่องราวนั้นๆได้ดี แต่พอลองได้เริ่มฟังแล้ว กลับรู้สึกชอบ และรู้สึกชอบ และรู้สึกว่าระหว่างกันฟังก็ทำให้เราได้คิดไปด้วยเช่นกัน ทุกวันนี้ เราฟังหลากหลายมาก ทั้งของ 'The Standard' อย่างเดียวก็มีเยอะมาก"
                />
                <PersonalComment
                    name="Ratchanon"
                    content="ส่วนตัวผมจะหาประเด็นที่สนใจก่อนครับ เพราะรายการ podcast มีครอบจักรวาลมาก ส่วนแอปที่ผมใช้ฟัง podcast ก็คงเป็น Spotify ครับ"
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
