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
                        Studying
                    </span>
                    • Posted by Nutcha/@65453744 24/3/66
                </p>
                <!-- Title -->
                <h1 class="text-2xl font-bold text-textPrimary-ligth dark:text-textPrimary-dark">
                    ปรึกษาหน่อยค่ะ
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
                    name="Phonnutcha"
                    content="แนะนำในฐานะพี่ที่จบแล้วนะคะ น้องไม่ต้องกดดันตัวเองยิ่งกดดันร่างกายจะยิ่งล้า พยายามตั้งใจฟัง จดเวลาอาจารย์สั่งงานเอาให้ละเอียดเลยค่ะกันลืมค่ะ พักผ่อนเยอะๆกินข้าวเช้าดื่มน้ำเยอะๆพกยาพาราไปด้วยเวลาปวดหัว(ไม่รู้ว่าที่ปวดหัวเพราะอะไรแต่ส่วนนึงถ้าดูแลตัวเองหนูจะสู้ไหว) เรื่องงานก็ถามเพื่อนที่เรียนคลาสเดียวกันกับเราไม่จำเป็นต้องสนิท ต้องใจกล้าเข้าไว้ สู้ๆนะหนู"
                />
                <PersonalComment
                    name="Siriwimon"
                    content="หากขี้ลืม หรือ ตอนอยู่ในห้องเรียนไม่ค่อยมีสมาธิ ลองอัดเสียงอาจารย์หรือพยายามจดควบคู่ไปด้วยดูงับ เราก็เป็นคนขี้ลืม ไม่ค่อยมีสมาธิตอนอยู่กับคนหมู่มาก  ค่อย ๆ ฝึกตัวเองไปทีละนิดนะงับ"
                />
                <PersonalComment
                    name="Kunpriya"
                    content="ที่หน้า ม. มีที่ศึกษาธรรมะ ไปไหว้พระโพธิสัตว์กวนอิม บางทีธรรมะอาจทำให้เราจิตสงบมองเห็นอะไรได้กว้างขึ้น เป็นกำลังให้นะคะ"
                />
                <PersonalComment
                    name="Sakda"
                    content="ลองนั่งห่างจากเพื่อน 1 โต๊ะครับ แรกๆเราก็เป็น พยายามตั้งใจฟังเวลาอาจารย์สอน สงสัยก็ถาม ตอนอ่านหนังสือสอบเราจะไม่ต้องอ่านเยอะครับ ถ้านั่งนานๆแล้วเริ่มเหม่อแนะนำให้พกลูกอมหรือขนมหรืออะไรเปรี้ยวๆไว้กินดูครับ"
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
                content: `เรารู้สึกเหนื่อยมากๆ เรื่องเรียน เรียนเทอมนี้ก็ F ไปแล้ว 2 ตัว เวลาเรียนปวดหัวตลอด สมองทำงานช้าอ ึนๆมึนๆ คิดอะไรไม่ออกเลย อาจารย์สอนอะไร สั่งงานอะไรผ่านไปไม่กี่นาทีคือลืมแล้ว ถามเพื่อนไม่ค่อยจะตอบ`
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
