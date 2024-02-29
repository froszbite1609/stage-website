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
                        Lifestyle
                    </span>
                    • Posted by Weroniczka/@66025010 20/1/66
                </p>
                <!-- Title -->
                <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                    มีเรื่องดีๆของคนดีๆมาแบ่งปัน
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
                content: `เช้าวันนี้ เจอสิ่งดีๆแต่เช้า ^^
                
                ลงมาจากหอมีลุงขับมอเตอร์ไซค์วินผ่านมาพอดี เช้านี้ขี้เกียจเดินเลยโบกนั่งตั้งแต่หน้าหอไปถึงปากซอย ในใจรู้อยู่แล้วว่าจากหอมาปากซอยหรือจากปากซอยไปหอก็ราคาแปดบาทเท่ากัน พอถึงปากซอยเราลงจากรถแล้วล้วงหน้าเหรียญสิบยื่นให้ลุงแล้วก็กะจะไม่เอาเงินทอนกำลังหันหลังจะเดินออกมาจากตรงนั้น ลุงแกพูดขึ้นมาว่า
                
                "หนูๆแปดบาทนะ ไม่ใช่สิบบาท เอาเงินทอนด้วย"
                เราก็หันไปหาลุงพร้อมกับที่ลุงยื่นเงินทอนมาให้เราสองบาท
                "เห็นมั้ยเงินยังเหลืออีกตั้งสองบาท" ลุงมอเตอร์ไซค์วินพูดกับเราพร้อมด้วยรอยยิ้ม
                เราพูด "ขอบคุณค่ะ" แล้วยิ้มตอบและเดินกลับออกมา`
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
