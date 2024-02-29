<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import VerticalLayout from '@/layouts/VerticalLayout.vue'
import PostShow from '@/components/PostShow.vue'
</script>
<template>
    <MainLayout>
        <VerticalLayout>
            <!-- Scholarship 2 -->
            <PostShow
                src="/scholarship/scholarship_2"
                category="Scholarship"
                date="1d"
                title="ตอนนี้เราเรียนอยู่คณะสาขาหนึ่งค่ะ แต่เรารู้สึกว่ามันไม่ใช่ทางเรา เราเคยคิดที่จะย้ายค่ะ คือเราอยากรู้ว่าเรื่อง กยศ. ต้องย้ายยังไงหรอคะ"
                content="ต้องเตรียมเอกสารอะไรยังไงหรอคะ พอดีเราทักไปถามทางเพจแล้วค่ะแต่เขายังไม่ตอบ ขอสอบถามผู้รู้หน่อยค่ะ"
            />

            <!-- Scholarship 1 -->
            <PostShow
                src="/scholarship/scholarship_1"
                category="Scholarship"
                date="2 weeks"
                title="ขอสอบถามหน่อยครับ ชั่วโมง กยศ. เขาเก็บกี่ชั่วโมงหรอครับแล้วเขาเก็บเป็นรายเทอมหรือรายปีครับ คือตอนนี้ผมยังไม่ได้เก็บเลยสักชั่วโมงมีพี่ๆเพื่อนๆคนไหนแนะนำที่เก็บ กยศ. ชั่วโมงเยอะๆไหมครับ"
                content=""
            />
        </VerticalLayout>
    </MainLayout>
</template>
