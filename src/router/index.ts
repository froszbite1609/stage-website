import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue' // Home page
import ProfliePage from '../views/ProfliePage.vue'
import RegisterPage from '@/views/RegisterPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/proflie',
            component: ProfliePage
        },
        {
            path: '/register',
            component: RegisterPage
        }
    ]
})

export default router
