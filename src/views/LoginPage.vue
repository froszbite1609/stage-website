<script setup lang="ts">
import AlternativeLayout from '@/layouts/AlternativeLayout.vue'
</script>
<template>
    <AlternativeLayout>
        <!-- Heading -->
        <section class="col-span-12 text-center">
            <h1
                class="text-[32px] font-bold mt-10 text-textPrimary-light dark:text-textPrimary-dark"
            >
                Login to Stage
            </h1>
            <p class="text-textSecondary-light dark:text-textSecondary-dark">
                No account?
                <RouterLink
                    to="/register"
                    class="underline underline-offset-2 text-textPrimary-light dark:text-textPrimary-dark"
                    >Sign up</RouterLink
                >
            </p>
        </section>

        <!-- Login form -->
        <form class="col-span-4 col-start-5" @submit.prevent="headToPage">
            <section class="flex flex-col gap-6">
                <input
                    type="email"
                    placeholder="Enter your email"
                    class="input-field p-4 border rounded bg-transparent border-dividerLight-light dark:border-dividerLight-dark text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light placeholder:dark:text-textSecondary-dark"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    class="input-field p-4 border rounded bg-transparent border-dividerLight-light dark:border-dividerLight-dark text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light placeholder:dark:text-textSecondary-dark"
                />
                <!--button-->
                <button
                    class="p-4 border rounded bg-bgMute-light dark:bg-bgMute-dark border-dividerLight-light dark:border-dividerLight-dark text-textSecondary-light dark:text-textSecondary-dark"
                >
                    Login to Stage
                </button>
            </section>
        </form>

        <!-- Forgot password-->
        <section class="col-span-12 text-center">
            <RouterLink
                to="/forgot"
                class="underline underline-offset-2 text-textPrimary-light dark:text-textPrimary-dark"
                >Forgot password</RouterLink
            >
        </section>
    </AlternativeLayout>
</template>
<script lang="ts">
interface SubmitEvent extends Event {
    preventDefault(): void
}

export default {
    methods: {
        headToPage(e: SubmitEvent): void {
            e.preventDefault()

            this.$router.push('/')
        }
    }
}
</script>
