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
                    heading="New post"
                    description="A new post has been added to the platform."
                />

                <i class="w-full h-px bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <NotificationAlert
                    heading="New comment"
                    description="A new comment has been added to your post."
                />
                <i class="w-full h-px bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <NotificationAlert heading="New follower" description="You have a new follower." />

                <i class="w-full h-px bg-dividerLight-light dark:bg-dividerLight-dark"></i>

                <NotificationAlert heading="New like" description="Your post has been liked." />

                <i class="w-full h-px bg-dividerLight-light dark:bg-dividerLight-dark"></i>
            </section>
        </section>
    </SecondLayout>
</template>
