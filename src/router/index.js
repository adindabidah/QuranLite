import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/randomayat",
      name: "randomayat",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/bacaan/:id",
      name: "bacaan",
      component: () => import("../views/BacaanView.vue"),
    },
    {
      path: "/quran",
      name: "quran",
      component: () => import("../views/QuranView.vue"),
    },
    {
      path: "/juzs/:id",
      name: "juzs",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/JuzsView.vue"),
    },

  ],
});

export default router;
