<template>
    <section
        class="flex flex-col gap-2 p-3 border rounded border-divider-light dark:border-divider-dark bg-bgSoft-light dark:bg-bgSoft-dark"
    >
        <RouterLink to="/saves">
            <h1 class="text-base font-bold text-textSecondary-light dark:text-textSecondary-dark">
                Posts saved
            </h1>
        </RouterLink>

        <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

        <RouterLink to="/notifications">
            <h1 class="text-base font-bold text-textSecondary-light dark:text-textSecondary-dark">
                Notifications
            </h1>
        </RouterLink>

        <i class="h-px w-full bg-dividerLight-light dark:bg-dividerLight-dark"></i>

        <RouterLink to="/login">
            <h1 class="text-base font-bold text-textSecondary-light dark:text-textSecondary-dark">
                Log out
            </h1>
        </RouterLink>
    </section>
</template>
