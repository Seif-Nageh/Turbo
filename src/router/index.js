import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      beforeEnter: () => {
        router.beforeEach((to, from, next) => {
          window.scrollTo(0, 0);
          next();
        });
      },
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "portfolio",
          name: "portfolio",
          component: () => import("../views/PortfolioView.vue"),
        },
      ],
    },
  ],
});

export default router;
