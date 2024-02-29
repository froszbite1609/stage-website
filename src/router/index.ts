import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomePage.vue' // Home page
import Login from '@/views/LoginPage.vue' // Login page
import Register from '@/views/RegisterPage.vue' // Register page
import Forgot from '@/views/ForgotPage.vue' // Forgot page
import PostCreating from '@/views/PostCreating.vue'

import Notifications from '@/views/NotificationPage.vue' // Notifications page
import Save from '@/views/PostSave.vue' // Profile page

import FoodMain from '@/views/food/FoodCategory.vue' // Food page category
import Food_1 from '@/views/food/posts/Food_1.vue' // Food page 1
import Food_2 from '@/views/food/posts/Food_2.vue' // Food page 2

import StudyingMain from '@/views/studying/StudyingCategory.vue' // Studying page category
import Studying_1 from '@/views/studying/posts/Studying_1.vue' // Studying page 1

import LifestyleMain from '@/views/lifestyle/LifestyleCategory.vue' // Lifestyle page category
import Lifestyle_1 from '@/views/lifestyle/posts/Lifestyle_1.vue' // Lifestyle page category
import Lifestyle_2 from '@/views/lifestyle/posts/Lifestyle_2.vue' // Lifestyle page category
import Lifestyle_3 from '@/views/lifestyle/posts/Lifestyle_3.vue' // Lifestyle page category

import ScholarshipMain from '@/views/scholarship/ScholarshipCategory.vue' // Scholarship page category
import Scholarship_1 from '@/views/scholarship/posts/Scholarship_1.vue' // Scholarship page category
import Scholarship_2 from '@/views/scholarship/posts/Scholarship_2.vue' // Scholarship page category

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
            path: '/post-creating',
            component: PostCreating
        },

        // Food
        {
            path: '/food',
            component: FoodMain
        },
        {
            path: '/food/food_1',
            component: Food_1
        },
        {
            path: '/food/food_2',
            component: Food_2
        },

        // Studying
        {
            path: '/studying',
            component: StudyingMain
        },
        {
            path: '/studying/studying_1',
            component: Studying_1
        },

        // Lifestyle
        {
            path: '/lifestyle',
            component: LifestyleMain
        },
        {
            path: '/lifestyle/lifestyle_1',
            component: Lifestyle_1
        },
        {
            path: '/lifestyle/lifestyle_2',
            component: Lifestyle_2
        },
        {
            path: '/lifestyle/lifestyle_3',
            component: Lifestyle_3
        },

        // Scholarship
        {
            path: '/scholarship',
            component: ScholarshipMain
        },
        {
            path: '/scholarship/scholarship_1',
            component: Scholarship_1
        },
        {
            path: '/scholarship/scholarship_2',
            component: Scholarship_2
        }
    ]
})

export default router
