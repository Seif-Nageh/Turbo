import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/website/HomeView.vue";
import { useGlobalStore } from "@/stores/global.js";

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
  next();
  const global = useGlobalStore();
  global.loadingScreen = true;
  setTimeout(() => {
    global.loadingScreen = false;
  }, 1300);
  if (!to.fullPath.includes("#")) {
    window.scrollTo(0, 0);
  } else {
    console.log(to.hash);
    const idName = to.hash.slice(1);
    console.log(idName);
    console.log(document.getElementById(idName));
  }
});

export default router;
