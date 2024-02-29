<template>
    <section
        class="flex flex-row gap-3 p-3 bg-bgSoft-light dark:bg-bgSoft-dark border rounded border-divider-light dark:border-divider-dark items-center"
    >
        <!-- User icon -->
        <section>
            <i
                class="pi pi-user text-textSecondary-light dark:text-textSecondary-dark text-base"
            ></i>
        </section>

        <!-- Button to show modal -->
        <RouterLink
            to="/post-creating"
            class="block w-full px-4 py-3 bg-bgMute-light dark:bg-bgMute-dark border rounded border-dividerLight-light dark:border-dividerLight-dark text-textSecondary-light dark:text-textSecondary-dark text-left"
        >
            Create Post
        </RouterLink>
    </section>
</template>
