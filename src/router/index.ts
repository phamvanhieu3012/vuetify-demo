import TheWelcomeVue from "@/components/TheWelcome.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginViewVue,
  },
  {
    path: "/about",
    name: "about",
    component: TheWelcomeVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
