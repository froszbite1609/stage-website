<template>
    <section>
        <!-- Backdrop -->
        <section
            class="z-30 fixed top-0 left-0 w-screen h-screen bg-modalBg"
            @click="closeModal"
        ></section>

        <!-- Modal -->
        <section
            class="z-30 fixed top-1/4 left-1/4 w-[916px] p-3 bg-bgMute-light dark:bg-bgMute-dark border rounded border-divider-light dark-border-divider-dark"
        >
            <form>
                <input
                    type="text"
                    class="w-full outline-none bg-transparent text-textPrimary-light dark:text-textPrimary-dark placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark"
                    placeholder="What are you looking for?"
                />
                <input type="submit" class="hidden" />
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
