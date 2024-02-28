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
                Create Account
            </h1>
            <p class="text-textSecondary-light dark:text-textSecondary-dark">
                Already on Stage?
                <RouterLink
                    to="/login"
                    class="underline underline-offset-2 text-textPrimary-light dark:text-textPrimary-dark"
                    >Log in</RouterLink
                >
            </p>
        </section>

        <!-- Register form -->
        <form class="col-span-4 col-start-5" @submit.prevent="headToPage">
            <section class="flex flex-col gap-6">
                <input
                    placeholder="Username"
                    class="input-field p-4 border rounded bg-transparent border-dividerLight-light dark:border-dividerLight-dark text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light placeholder:dark:text-textSecondary-dark"
                />
                <input
                    type="email"
                    placeholder="Email (@up.ac.th)"
                    class="input-field p-4 border rounded bg-transparent border-dividerLight-light dark:border-dividerLight-dark text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light placeholder:dark:text-textSecondary-dark"
                />
                <input
                    type="password"
                    placeholder="8 characters password"
                    class="input-field p-4 border rounded bg-transparent border-dividerLight-light dark:border-dividerLight-dark text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light placeholder:dark:text-textSecondary-dark"
                />

                <!-- Submit button -->
                <button
                    type="submit"
                    class="p-4 border rounded bg-bgMute-light dark:bg-bgMute-dark border-dividerLight-light dark:border-dividerLight-dark text-textSecondary-light dark:text-textSecondary-dark"
                />
                <!--button-->
                <button
                    class="w-full p-[10px] mt-[26px] border-[1px] rounded bg-[#F1F1F1] dark:bg-[#2F2F2F] border-[#3C3C3C1F] dark:border-[#5454547A] text-[#3C3C3CB2] dark:text-[#EBEBEB99] hover:bg-dividerLight-light"
                >
                    Sign up to Stage
                </button>
            </section>
        </form>
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

            this.$router.push('/login')
        }
    }
}
</script>
