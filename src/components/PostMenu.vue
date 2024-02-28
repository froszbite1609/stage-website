<template>
    <article id="app">
        <section class="flex items-center">
            <button
                class="flex items-center p-[16px] mr-[5px] text-[#3c3c3cb2] text-[14px] cursor-pointer transition-colors-[0.3s] gap-[6px] hover:text-[#72cacf] focus:text-[#72cacf] active:text-[#72cacf] dark:text-[#EBEBEB99] dark:hover:text-[#30888D] dark:focus:text-[#30888D] dark:active:text-[#30888D]"
                @click="upvote"
                :class="{ 'text-blue-500': upvoted }"
            >
                <i class="pi pi-arrow-up"></i>
            </button>
            <button
                class="flex items-center p-[16px] mr-[5px] text-[#3c3c3cb2] text-[14px] cursor-pointer transition-colors-[0.3s] gap-[6px] hover:text-[#72cacf] focus:text-[#72cacf] active:text-[#72cacf] dark:text-[#EBEBEB99] dark:hover:text-[#30888D] dark:focus:text-[#30888D] dark:active:text-[#30888D]"
                @click="downvote"
            >
                <i class="pi pi-arrow-down"></i>
            </button>
            <button
                class="flex items-center p-[16px] mr-[5px] text-[#3c3c3cb2] text-[14px] cursor-pointer transition-colors-[0.3s] gap-[6px] hover:text-[#72cacf] focus:text-[#72cacf] active:text-[#72cacf] dark:text-[#EBEBEB99] dark:hover:text-[#30888D] dark:focus:text-[#30888D] dark:active:text-[#30888D]"
                @click="comment"
            >
                <i class="pi pi-comment"></i> Comment
            </button>
            <button
                class="flex items-center p-[16px] mr-[5px] text-[#3c3c3cb2] text-[14px] cursor-pointer transition-colors-[0.3s] gap-[6px] hover:text-[#72cacf] focus:text-[#72cacf] active:text-[#72cacf] dark:text-[#EBEBEB99] dark:hover:text-[#30888D] dark:focus:text-[#30888D] dark:active:text-[#30888D]"
                @click="share"
            >
                <i class="pi pi-share-alt"></i> Share
            </button>
            <button
                class="flex items-center p-[16px] mr-[5px] text-[#3c3c3cb2] text-[14px] cursor-pointer transition-colors-[0.3s] gap-[6px] hover:text-[#72cacf] focus:text-[#72cacf] active:text-[#72cacf] dark:text-[#EBEBEB99] dark:hover:text-[#30888D] dark:focus:text-[#30888D] dark:active:text-[#30888D"
                @click="save"
            >
                <i class="pi pi-bookmark"></i> Save
            </button>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            upvoted: false
        }
    },
    methods: {
        upvote() {
            this.upvoted = !this.upvoted
        },
        downvote() {
            // downvote logic
        },
        comment() {
            // comment logic
        },
        share() {
            // share logic
        },
        save() {
            // save logic
        }
    }
}
</script>
