import { createRouter, createWebHistory } from 'vue-router';


import home from '../components/home.vue'
import signup from '../components/signup.vue'



const routes = [
   
    {path: "/home", component: home},
    {path: '/', component: signup},


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;