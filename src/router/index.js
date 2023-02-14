import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      // always use .vue
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/home",
      // always use .vue
      redirect: "/",
    },
    {
      path: "/login",
      // always use .vue
      redirect: "/",
    },
    {
      path: "/signup",
      // always use .vue
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/profile",
      // always use .vue
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/listing",
      // always use .vue
      component: () => import("../views/ListingView.vue"),
    },
  ],
});

export default router;
