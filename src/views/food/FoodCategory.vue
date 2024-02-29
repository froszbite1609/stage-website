<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import VerticalLayout from '@/layouts/VerticalLayout.vue'
import PostShow from '@/components/PostShow.vue'
</script>
<template>
    <MainLayout>
        <VerticalLayout>
            <!-- Food 2 -->
            <PostShow
                name="Wimonsiri"
                studentId="66022905"
                src="/food/food_2"
                category="Food"
                date="12/3/66"
                title="มีเมนูเด็กหอที่ไม่แพง แถมทำง่ายๆไม่ยุ่งยากแนะนำไหมครับ"
                content="ตามนั้นเลยครับ เพิ่งย้ายมาอยู่หอตอนนี้ต้องประหยัดเงินพอสมควรเลยครับ ไม่อยากใช้เยอะแค่ค่าหอก็แพงโคตร..."
            />

            <!-- Food 1 -->
            <PostShow
                name="Wimonsiri"
                studentId="66022905"
                src="/food/food_1"
                category="Food"
                date="12d"
                title="เทคนิคการทอดไข่เจียวให้ฟู ฟูแบบเต็มกระทะ"
                image="/src/assets/images/food_1.png"
                content="สวัสดีครับ วันนี้ผมจะมาแชร์วิธีการทอดไข่เจียวให้ฟู ฟูแบบเต็มกระทะ ด้วยวิธีแบบง่ายๆของผม มาลองดูกันนะครับว่าต้องทำยังไงบ้าง ผมจะใช้..."
            />
        </VerticalLayout>
    </MainLayout>
</template>
