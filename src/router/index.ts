import { createRouter, createWebHistory } from "vue-router";

import Home from '@/Home.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login 
    },
    {
      path: "/test",
      name: "/login",
      component: Home
    }
  ],
});

export default router;
