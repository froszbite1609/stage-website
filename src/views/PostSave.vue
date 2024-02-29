<script setup lang="ts">
import SecondLayout from '@/layouts/SecondLayout.vue'
import SaveComp from '@/components/SaveComp.vue'
</script>
<template>
    <SecondLayout>
        <section
            class="flex flex-col basis-9/12 gap-4 p-4 border rounded border-divider-light dark:border-divider-dark bg-bgSoft-light dark:bg-bgSoft-dark"
        >
            <!-- Heading -->
            <h1 class="text-[32px] font-bold text-mainColour-light dark:text-mainColour-dark">
                Post Saved
            </h1>

            <SaveComp
                src="/food/food_1"
                text="เทคนิคการทอดไข่เจียวให้ฟู ฟูแบบเต็มกระทะ"
                image="/src/assets/images/food_1.png"
            />
        </section>
    </SecondLayout>
</template>
