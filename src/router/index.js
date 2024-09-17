import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import UsersPage from '../views/UsersPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,

        },
        {
            path: '/users',
            component: UsersPage
        }
    ]    
})

export default router