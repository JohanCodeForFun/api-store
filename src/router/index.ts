import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import About from "../views/AboutPage.vue";
import Product from "../views/ProductPage.vue";
import NotFound from "../views/PageNotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/product/:id", name: "Product", component: Product },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
