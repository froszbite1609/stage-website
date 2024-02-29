<template>
    <section>
        <form class="flex flex-col">
            <textarea
                rows="4"
                class="border-t border-x rounded-t border-dividerLight-light dark:border-dividerLight-dark bg-bgSoft-light dark:bg-bgSoft-dark resize-none outline-none p-3 placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark text-textPrimary-light dark:text-textPrimary-dark"
                placeholder="What are your thoughts?"
            ></textarea>
            <section
                class="flex flex-row border border-dividerLight-light dark:border-dividerLight-dark rounded-b bg-bgMute-light dark:bg-bgMute-dark py-2 px-3 justify-between items-center"
            >
                <!-- Added photo -->
                <label>
                    <input type="file" class="hidden" />
                    <i
                        class="pi pi-image text-textSecondary-light dark:text-textSecondary-dark cursor-pointer"
                    ></i>
                </label>

                <button
                    class="py-2 px-3 bg-mainColour-light dark:bg-mainColour-dark text-white text-xs rounded font-medium"
                >
                    Comment
                </button>
            </section>
        </form>
    </section>
</template>
