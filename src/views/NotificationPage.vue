<script setup lang="ts">
import SecondLayout from '@/layouts/SecondLayout.vue'
import NotificationAlert from '@/components/NotificationAlert.vue'
</script>
<template>
    <SecondLayout>
        <section
            class="flex flex-col basis-9/12 gap-4 p-4 border rounded border-divider-light dark:border-divider-dark bg-bgSoft-light dark:bg-bgSoft-dark"
        >
            <!-- Heading -->
            <h1 class="text-[32px] font-bold text-mainColour-light dark:text-mainColour-dark">
                Notifications
            </h1>

            <!-- Content  -->
            <section class="flex flex-col gap-4">
                <NotificationAlert
                    heading="Aing replied to your comment"
                    description="Aing replied to your comment on the post."
                />

                <i class="w-full h-px bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <NotificationAlert
                    heading="FeeFa upvoted your post"
                    description="FeeFa upvoted your post."
                />
                <i class="w-full h-px bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <NotificationAlert heading="Your comment was deleted by owner" description="" />

                <i class="w-full h-px bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <NotificationAlert
                    heading="Your comment was responded by Aranchai"
                    description=""
                />
            </section>
        </section>
    </SecondLayout>
</template>
