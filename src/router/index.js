import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/website/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "about",
          name: "about",
          component: () => import("../views/website/AboutView.vue"),
        },
        {
          path: "portfolio",
          name: "portfolio",
          component: () => import("../views/website/PortfolioView.vue"),
        },
      ],
    },
    {
      path: "/not-found",
      name: "notFound",
      component: () => import("../views/ErrorPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      beforeEnter: (to, from, next) => {
        return next({ name: "notFound" });
      },
      component: () => import("@/views/ErrorPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
