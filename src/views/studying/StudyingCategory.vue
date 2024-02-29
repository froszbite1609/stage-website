<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import VerticalLayout from '@/layouts/VerticalLayout.vue'
import PostShow from '@/components/PostShow.vue'
</script>
<template>
    <MainLayout>
        <VerticalLayout>
            <!-- Studying 1 -->
            <PostShow
                name="Nutcha"
                studentId="65453744"
                src="/studying/studying_1"
                category="Studying"
                date="24/2/66"
                title="ปรึกษาหน่อยค่ะ"
                content="เรารู้สึกเหนื่อยมากๆ เรื่องเรียน เรียนเทอมนี้ก็ F ไปแล้ว 2 ตัว เวลาเรียนปวดหัวตลอด สมองทำงานช้า อึนๆมึนๆ..."
            />
        </VerticalLayout>
    </MainLayout>
</template>
