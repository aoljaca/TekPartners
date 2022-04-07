import Vue from "vue";
import ExternalFacingView from "../components/shared/ExternalFacingView.vue";
import Books from "../components/Books.vue";
import Book from "../components/Book.vue"
import LandingPage from "../components/LandingPage.vue"
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: ExternalFacingView,
    children: [
      {
        path: "",
        name: "Landing Page",
        component: LandingPage,
      },
      {
        path: "/books",
        name: "Books",
        component: Books,
      },
      {
        path: "/books/:id",
        name: "Book",
        component: Book,
      },
    ],
  },
]

const router = new VueRouter({
  routes,
});

export default router;