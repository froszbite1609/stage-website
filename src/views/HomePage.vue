<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import VerticalLayout from '@/layouts/VerticalLayout.vue'
import CreatePost from '@/components/CreatePost.vue'
import PostShow from '@/components/PostShow.vue'
</script>
<template>
    <MainLayout>
        <VerticalLayout>
            <CreatePost />

            <!-- Food 1 -->
            <PostShow
                src="/food/food_1"
                category="Food"
                date="12d"
                title="เทคนิคการทอดไข่เจียวให้ฟู ฟูแบบเต็มกระทะ"
                image="/src/assets/images/food_1.png"
                content="สวัสดีครับ วันนี้ผมจะมาแชร์วิธีการทอดไข่เจียวให้ฟู ฟูแบบเต็มกระทะ ด้วยวิธีแบบง่ายๆของผม มาลองดูกันนะครับว่าต้องทำยังไงบ้าง ผมจะใช้..."
            />

            <!-- Lifestyle 2 -->
            <PostShow
                src="/lifestyle/lifestyle_2"
                category="Lifestyle"
                date="12d"
                title="คนที่เรียนไปด้วย ทำงานไปด้วย ทำยังไงให้เอาชีวิตรอดได้จนจบคะ ถ้าไม่มีใคร support เลย"
                content="ถ้ามีเงื่อนไขในชีวิตว่า แม่ทำงานได้วันละไม่ถึง 200 บาท น้องไม่ได้ทำงาน ไม่มีญาติช่วยเหลือ ตัวเองต้องทำงานหาเงินเพื่อที่จะมีให้ตัวเองได้กินข้าว ซื้อของอุปโภคบริโภคภายในครอบครัว ไหนจะค่าเรียนอีก จ่ายค่าเทอมเองทุกบาท ค่ารถไปบางทีเราก็ไม่ได้ไปสอบเพราะวันนั้นไม่มีค่ารถไป แล้วต้องขาดงานทำให้เสียรายได้อีก แค่สามร้อยกว่าบาทก็ทำให้ชีวิตมีกินมีใช้หลายวันแล้ว ลาสามวัน..."
            />

            <!-- Scholarship 2 -->
            <PostShow
                src="/scholarship/scholarship_2"
                category="Scholarship"
                date="1d"
                title="ตอนนี้เราเรียนอยู่คณะสาขาหนึ่งค่ะ แต่เรารู้สึกว่ามันไม่ใช่ทางเรา เราเคยคิดที่จะย้ายค่ะ คือเราอยากรู้ว่าเรื่อง กยศ. ต้องย้ายยังไงหรอคะ"
                content="ต้องเตรียมเอกสารอะไรยังไงหรอคะ พอดีเราทักไปถามทางเพจแล้วค่ะแต่เขายังไม่ตอบ ขอสอบถามผู้รู้หน่อยค่ะ"
            />

            <!-- Studying 1 -->
            <PostShow
                src="/studying/studying_1"
                category="Studying"
                date="24/2/66"
                title="ปรึกษาหน่อยค่ะ"
                content="เรารู้สึกเหนื่อยมากๆ เรื่องเรียน เรียนเทอมนี้ก็ F ไปแล้ว 2 ตัว เวลาเรียนปวดหัวตลอด สมองทำงานช้า อึนๆมึนๆ..."
            />
        </VerticalLayout>
    </MainLayout>
</template>
