<template>
    <section>
        <!-- Backdrop -->
        <section
            class="z-30 fixed top-0 left-0 w-screen h-screen bg-modalBg"
            @click="closeModal"
        ></section>

        <!-- Modal -->
        <section
            class="z-30 fixed top-1/4 left-1/4 w-[916px] p-3 bg-bgSoft-light dark:bg-bgSoft-dark border rounded border-divider-light dark-border-divider-dark"
        >
            <form class="flex flex-col gap-3">
                <!-- Title -->
                <label
                    class="text-[32px] font-bold text-textPrimary-light dark:text-textPrimary-dark"
                    >Insert link</label
                >

                <!-- Line -->
                <i class="bg-divider-light dark:bg-divider-dark h-px w-full"></i>

                <section class="flex flex-col gap-6">
                    <!-- URL -->
                    <section class="flex flex-row mt-4 items-center">
                        <label
                            class="text-textSecondary-light dark:text-textSecondary-dark basis-1/2"
                            >URL</label
                        >
                        <input
                            class="basis-1/2 text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark bg-bgMute-light dark:bg-bgMute-dark p-3 border rounded border-dividerLight-light dark:border-dividerLight-dark outline-none"
                        />
                    </section>

                    <!-- Text to display -->
                    <section class="flex flex-row items-center">
                        <label
                            class="text-textSecondary-light dark:text-textSecondary-dark basis-1/2"
                            >Text to display</label
                        >
                        <input
                            class="basis-1/2 text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark bg-bgMute-light dark:bg-bgMute-dark p-3 border rounded border-dividerLight-light dark:border-dividerLight-dark outline-none"
                        />
                    </section>

                    <button
                        class="text-white rounded bg-mainColour-light dark:bg-mainColour-dark p-3"
                    >
                        Comment as a link
                    </button>
                </section>
            </form>
        </section>
    </section>
</template>
<script lang="ts">
export default {
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>
