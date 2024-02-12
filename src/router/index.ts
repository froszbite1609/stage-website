import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue' // Home page
import Register from '../views/RegisterPage.vue' // Register page

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/register',
            component: Register
        }
    ]
})

export default router
