import { createRouter, createWebHistory } from "vue-router";
import Local from "../views/Local";

const routes = [
  {
    path: "/global",
    name: "Local",
    component: Local,
  },
  {
    path: "/info",
    name: "Info",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Info"),
  },
  {
    path: "/",
    name: "Global",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Global"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
