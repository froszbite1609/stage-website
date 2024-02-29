<script setup lang="ts">
import LinkModal from '@/components/LinkModal.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>
<template>
    <LinkModal v-show="isModalOpen" @closeModal="close" />
    <MainLayout>
        <section
            class="flex basis-9/12 max-h-[600px] p-6 border rounded border-divider-light dark:border-divider-dark bg-bgSoft-light dark:bg-bgSoft-dark"
        >
            <form @submit.prevent="checkSubmit" class="w-full">
                <!-- Alert -->
                <section
                    v-if="showAlert"
                    v-bind:class="{
                        'bg-danger-light dark:bg-danger-dark text-textPrimary-light dark:text-textPrimary-dark':
                            isEmpty,
                        'bg-success-light dark:success-dark text-textPrimary-light dark:text-textPrimary-dark':
                            !isEmpty
                    }"
                    class="p-3 mb-6 rounded"
                >
                    {{ isEmpty ? errorMessage : successMessage }}
                </section>

                <!-- Create title -->
                <input
                    class="w-full py-3 px-2 bg-bgMute-light dark:bg-bgMute-dark border rounded border-dividerLight-light dark:border-dividerLight-dark text-textPrimary-light dark:text-textPrimary-dark outline-none placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark"
                    type="text"
                    placeholder="Title"
                    v-model="title"
                />

                <!-- Customize post -->
                <section
                    class="mt-6 bg-bgSoft-light dark:bg-bgSoft-dark border rounded border-dividerLight-light dark:border-dividerLight-dark"
                >
                    <!-- Top -->
                    <section
                        class="flex flex-row gap-4 p-3 border-b border-dividerLight-light dark:border-dividerLight-dark bg-bgMute-light dark:bg-bgMute-dark text-xl text-textSecondary-light dark:text-textSecondary-dark"
                    >
                        <label>
                            <input type="file" hidden />
                            <i class="pi pi-image cursor-pointer"></i>
                        </label>
                        <label>
                            <input type="file" hidden />
                            <i class="pi pi-video cursor-pointer"></i>
                        </label>
                        <i @click="showModal" class="pi pi-link cursor-pointer"></i>
                    </section>

                    <!-- Bottom -->
                    <section class="min-h-32">
                        <input
                            class="w-full bg-transparent p-3 text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark outline-none"
                            type="text"
                            placeholder="Text (optional)"
                            v-model="text"
                        />
                    </section>
                </section>

                <!-- Submit button -->
                <button
                    class="bg-mainColour-light dark:bg-mainColour-dark px-6 py-2 rounded text-white mt-6"
                    type="submit"
                >
                    Post
                </button>
            </form>
        </section>
    </MainLayout>
</template>
<script lang="ts">
export default {
    data() {
        return {
            title: '',
            text: '',
            errorMessage: 'Please fill in the title and text.',
            successMessage: 'Submit successful!',
            isEmpty: true,
            showAlert: false,
            isModalOpen: false
        }
    },
    methods: {
        checkSubmit() {
            this.isEmpty = this.title === '' && this.text === ''
            if (!this.isEmpty) {
                console.log('Submitted')
            } else {
                console.log('Please fill in the title and text')
            }
            this.showAlert = true
        },
        showModal() {
            this.isModalOpen = true
        },
        close() {
            this.isModalOpen = false
        }
    }
}
</script>
