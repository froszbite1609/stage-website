<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import VerticalLayout from '@/layouts/VerticalLayout.vue'
import PostShow from '@/components/PostShow.vue'
</script>
<template>
    <MainLayout>
        <VerticalLayout>
            <!-- Lifestyle 3 -->
            <PostShow
                src="/lifestyle/lifestyle_3"
                category="Lifestyle"
                date="7d"
                title="ถามคนชอบฟัง podcast ค่ะ ว่าชอบฟังอะไร รู้จักได้ยังไง รู้จากไหน"
                content=""
            />

            <!-- Lifestyle 2 -->
            <PostShow
                src="/lifestyle/lifestyle_2"
                category="Lifestyle"
                date="12d"
                title="คนที่เรียนไปด้วย ทำงานไปด้วย ทำยังไงให้เอาชีวิตรอดได้จนจบคะ ถ้าไม่มีใคร support เลย"
                content="ถ้ามีเงื่อนไขในชีวิตว่า แม่ทำงานได้วันละไม่ถึง 200 บาท น้องไม่ได้ทำงาน ไม่มีญาติช่วยเหลือ ตัวเองต้องทำงานหาเงินเพื่อที่จะมีให้ตัวเองได้กินข้าว ซื้อของอุปโภคบริโภคภายในครอบครัว ไหนจะค่าเรียนอีก จ่ายค่าเทอมเองทุกบาท ค่ารถไปบางทีเราก็ไม่ได้ไปสอบเพราะวันนั้นไม่มีค่ารถไป แล้วต้องขาดงานทำให้เสียรายได้อีก แค่สามร้อยกว่าบาทก็ทำให้ชีวิตมีกินมีใช้หลายวันแล้ว ลาสามวัน..."
            />

            <!-- Lifestyle 1 -->
            <PostShow
                src="/lifestyle/lifestyle_1"
                category="Lifestyle"
                date="20/1/66"
                title="มีเรื่องดีๆของคนดีๆมาแบ่งปัน"
                content="เช้าวันนี้ เจอสิ่งดีๆแต่เช้า ลงมาจากหอ มีลุงขับมอเตอไซค์วินผ่านมาพอดี เช้านี้ขี้เกียจเดินเลยโบก..."
            />
        </VerticalLayout>
    </MainLayout>
</template>
