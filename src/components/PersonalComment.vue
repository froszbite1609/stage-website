<template>
    <section class="flex flex-row gap-3">
        <img src="@/assets/images/user.png" class="w-12 h-12 rounded-full" />
        <section class="flex flex-col w-full bg-bgSoft-light dark:bg-bgSoft-dark">
            <section class="flex flex-row justify-between">
                <p class="text-textPrimary-light dark:text-textPrimary-dark font-bold">
                    {{ name }}
                </p>
            </section>
            <section>
                <p class="text-textSecondary-light dark:text-textSecondary-dark font-medium">
                    {{ content }}
                </p>
            </section>
        </section>
    </section>
</template>
<script lang="ts">
export default {
    props: {
        name: {
            type: String,
            default: 'Aranchai Moonkum'
        },
        content: {
            type: String,
            default:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }
}
</script>
