<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>
<template>
    <MainLayout>
        <section
            class="flex basis-9/12 p-6 max-h-96 border rounded border-divider-light dark:border-divider-dark bg-bgSoft-light dark:bg-bgSoft-dark"
        >
            <section class="w-full">
                <!-- Create title -->
                <input
                    class="w-full py-3 px-2 bg-bgMute-light dark:bg-bgMute-dark border rounded border-dividerLight-light dark:border-dividerLight-dark text-textPrimary-light dark:text-textPrimary-dark outline-none placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark"
                    type="text"
                    placeholder="Title"
                />

                <!-- Customize post -->
                <section
                    class="mt-6 bg-bgSoft-light dark:bg-bgSoft-dark border rounded border-dividerLight-light dark:border-dividerLight-dark"
                >
                    <!-- Top -->
                    <section
                        class="flex flex-row gap-4 p-3 border-b border-dividerLight-light dark:border-dividerLight-dark bg-bgMute-light dark:bg-bgMute-dark text-xl text-textSecondary-light dark:text-textSecondary-dark"
                    >
                        <i class="pi pi-image"></i>
                        <i class="pi pi-video"></i>
                        <i class="pi pi-link"></i>
                    </section>

                    <!-- Bottom -->
                    <section class="min-h-32">
                        <input
                            class="w-full bg-transparent p-3 text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark outline-none"
                            type="text"
                            placeholder="Text (optional)"
                        />
                    </section>
                </section>

                <!-- Submit button -->
                <button
                    class="bg-mainColour-light dark:bg-mainColour-dark px-6 py-2 rounded text-white mt-6"
                >
                    Post
                </button>
            </section>
        </section>
    </MainLayout>
</template>
