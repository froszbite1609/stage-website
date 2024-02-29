<template>
    <section class="flex flex-row gap-4">
        <button
            class="cursor-pointer text-lg hover:text-mainColour-light dark:hover:text-mainColour-dark"
            v-bind:class="{
                'text-textSecondary-light dark:text-textSecondary-dark': !upvoted,
                'text-mainColour-light dark:text-mainColour-dark': upvoted
            }"
            v-on:click="upvoted = !upvoted"
        >
            <i class="pi pi-arrow-up"></i>
        </button>
        <button
            class="cursor-pointer text-lg hover:text-mainColour-light dark:hover:text-mainColour-dark"
            v-bind:class="{
                'text-textSecondary-light dark:text-textSecondary-dark': !downvoted,
                'text-mainColour-light dark:text-mainColour-dark': downvoted
            }"
            v-on:click="downvoted = !downvoted"
        >
            <i class="pi pi-arrow-down"></i>
        </button>
        <button
            class="flex gap-3 items-center text-textSecondary-light dark:text-textSecondary-dark cursor-pointer text-lg hover:text-mainColour-light dark:hover:text-mainColour-dark"
        >
            <i class="pi pi-comment"></i>
            Comment
        </button>
        <button
            class="flex gap-3 items-center text-textSecondary-light dark:text-textSecondary-dark cursor-pointer text-lg hover:text-mainColour-light dark:hover:text-mainColour-dark"
        >
            <i class="pi pi-share-alt"></i>
            Share
        </button>
        <button
            class="flex gap-3 items-center text-textSecondary-light dark:text-textSecondary-dark cursor-pointer text-lg hover:text-mainColour-light dark:hover:text-mainColour-dark"
        >
            <i class="pi pi-bookmark"></i>
            Save
        </button>
    </section>
</template>
<script lang="ts">
export default {
    data() {
        return {
            upvoted: false,
            downvoted: false
        }
    }
}
</script>
