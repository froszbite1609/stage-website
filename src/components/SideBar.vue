<script setup lang="ts">
import RecentPost from '@/components/RecentPost.vue'
import CategoryLink from './CategoryLink.vue'
</script>
<template>
    <article class="flex flex-col basis-3/12">
        <!-- Recent posts -->
        <section
            class="flex flex-col gap-3 border rounded border-divider-light dark:border-divider-dark bg-bgSoft-light dark:bg-bgSoft-dark p-3"
        >
            <h1
                class="text-xs uppercase font-bold text-textPrimary-light dark:text-textPrimary-dark"
            >
                Recent posts
            </h1>

            <!-- Post 1  -->
            <RecentPost
                image="/src/assets/images/food_1.png"
                title="เทคนิคการทำไข่เจียวให้ฟู ฟูแบบเต็มกระทะ"
                point="2"
                comment="2"
                date="12d"
                src="/food/food_1"
            />

            <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

            <!-- Post 2 -->
            <RecentPost
                title="มีเมนูเด็กหอที่ไม่แพง แถมทำง่ายๆไม่ยุ่งยากแนะนำไหมครับ"
                point="5"
                comment="1"
                date="12/3/66"
                src="/food/food_2"
            />

            <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

            <!-- Post 3 -->
            <RecentPost
                title="ถามคนชอบฟัง podcast ค่ะ ว่าชอบฟังอะไร รู้จักได้ยังไง รู้จากไหน"
                point="1"
                comment="4"
                date="7d"
                src="/lifestyle/lifestyle_3"
            />

            <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

            <!-- Post 4 -->
            <RecentPost
                title="ตอนนี้เราเรียนอยู่คณะสาขาหนึ่งค่ะ แต่เรารู้สึกว่ามันไม่ใช่ทางเรา เราเคยคิดที่จะย้ายค่ะ คือเราอยากรู้เรื่องว่าเรื่อง กยศ. ต้องย้ายยังไงหรอคะ"
                point="2"
                comment="3"
                date="1d"
                src="/scholarship/scholarship_2"
            />

            <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

            <!-- Post 5 -->
            <RecentPost
                title="มีเรื่องราวดีๆของคนดีๆมาแบ่งปัน"
                point="7"
                comment="0"
                date="20/1/66"
                src="/lifestyle/lifestyle_1"
            />
        </section>

        <!-- Categories -->
        <section
            class="mt-6 border rounded border-divider-light dark:border-divider-dark bg-bgSoft-light dark:bg-bgSoft-dark p-3"
        >
            <h1
                class="mb-3 text-xs uppercase font-bold text-textPrimary-light dark:text-textPrimary-dark"
            >
                Categories
            </h1>
            <section class="flex flex-col gap-3">
                <!-- Food category -->
                <CategoryLink src="/food" category="Food" />

                <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <!-- Food category -->
                <CategoryLink src="/lifestyle" category="Lifestyle" />

                <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <!-- Studying category -->
                <CategoryLink src="/studying" category="Studying" />

                <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <!-- Scholarship category -->
                <CategoryLink src="/scholarship" category="Scholarship" />
            </section>
        </section>
    </article>
</template>
