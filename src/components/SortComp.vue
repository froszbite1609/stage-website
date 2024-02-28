<template>
    <section
        class="relative inline-block max-w-48 font-bold text-mainColour-light dark:text-mainColour-dark"
    >
        <button @click="toggleMenu">
            Sort By: {{ selectedSort }} <i class="pi pi-angle-down"></i>
        </button>
        <ul
            v-show="showMenu"
            class="mt-2 absolute w-full text-left bg-bgMute-light dark:bg-bgMute-dark"
        >
            <li @click="selectSort('Newest')" class="p-3 cursor-pointer">Newest</li>
            <li @click="selectSort('Best')" class="p-3 cursor-pointer">Best</li>
        </ul>
    </section>
</template>
<script lang="ts">
export default {
    data() {
        return {
            selectedSort: 'Newest',
            showMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },

        selectSort(sortOption: string) {
            this.selectedSort = sortOption
            this.showMenu = false
        }
    }
}
</script>
