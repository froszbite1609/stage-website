import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomePage.vue' // Home page
import Login from '@/views/LoginPage.vue' // Login page
import Register from '@/views/RegisterPage.vue' // Register page
import Forgot from '@/views/ForgotPage.vue' // Forgot page

import Notifications from '@/views/NotificationPage.vue' // Notifications page
import Save from '@/views/PostSave.vue' // Profile page

import FoodMain from '@/views/food/FoodCategory.vue' // Food page category
import Food_1 from '@/views/food/posts/Food_1.vue' // Food page 1

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
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/forgot',
            component: Forgot
        },

        {
            path: '/saves',
            component: Save
        },
        {
            path: '/notifications',
            component: Notifications
        },

        {
            path: '/food',
            component: FoodMain
        },
        {
            path: '/food/food_1',
            component: Food_1
        }
    ]
})

export default router
