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
                    • Posted by Wimonsiri/@66022905 12d
                </p>
                <!-- Title -->
                <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                    เทคนิคการทอดไข่เจียวให้ฟู ฟูแบบเต็มกระทะ
                </h1>
            </section>

            <!-- Image -->
            <section>
                <img :src="post.image" class="max-h-80 w-full object-cover" />
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
                    name="Naphat"
                    content="เมนูง่ายๆ แต่ถ้ามีเทคนิคดีๆ ประกอบด้วย จะทั้งอร่อยทั้งฟินยิ่งกว่าเก่า"
                />
                <PersonalComment name="Phonsinee" content="ขอบคุณที่แบ่งปันสูตรอาหารครับ" />
            </section>
        </article>
    </MainLayout>
</template>
<script lang="ts">
export default {
    data() {
        return {
            post: {
                content: `สวัสดีครับ วันนี้ผมจะมาแชร์วิธีการทอดไข่เจียวให้ฟู ฟูแบบเต็มกระทะ ด้วยวิธีแบบง่ายๆของผม มาลองดูกันนะครับว่าต้องทำยังไงบ้าง ผมจะใช้

            - ไข่ไก่ 2 ฟอง
            - น้ำปลา
            - น้ำมันพืช ประมาณ 150ml
            - นำไข่ตอกใส่ชาม ใส่น้ำปลา และคนให้เข้ากัน
            - ตั้งกระทะใส่น้ำมันพืช รอให้ร้อน
            - ใส่ไข่ที่ตอกใส่กระทะ แล้วใช้ทัพพีพลิกไข่ให้สุกทั่วทั้งสองด้าน
            - ตักขึ้นใส่จาน พร้อมเสิร์ฟ`,
                image: '/src/assets/images/food_1.png'
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
