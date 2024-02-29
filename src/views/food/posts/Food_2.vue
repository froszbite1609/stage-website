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
                        Food
                    </span>
                    • Posted by Weroniczka/@66025010 12/3/66
                </p>
                <!-- Title -->
                <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                    มีเมนูเด็กหอที่ไม่แพง แถมทำง่ายๆไม่ยุ่งยากแนะนำไหมครับ
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
                    content="ข้าวสวย หุงพร้อมไข่ต้มหรือข้าวง่ายๆอย่างเช่น ข้าวเปล่ากับไข่ดาว ไข่เจียวก็ได้ครับ"
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
                content: `ตามนั้นเลยครับ เพิ่งย้ายมาอยู่หอตอนนี้ต้องประหยัดเงินพอสมควรเลยครับ ไม่อยากใช้เยอะแค่ค่าหอก็แพงโคตรละครับ จะให้ซื้อกินทุกวันคงไม่ไหว ค่าของกินเลยต้องลดๆลงมาหน่อย อุปกรณ์ที่มีก็จะเป็น กระทะไฟฟ้า หม้อต้มเล็กๆครับ ส่วนแหล่งที่ซื้อของ เช่น ตลาด แถวนี้ไม่มีเลยครับ ใครพอจะมีเมนูแนะนำบ้างครับ หาซื้อในเซเว่นก็ได้ครับ`
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
