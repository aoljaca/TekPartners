import Vue from "vue";
import ExternalFacingView from "../components/shared/ExternalFacingView.vue"
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    name: "Not Found",
    redirect: () => "/not-found",
  },
  {
    path: "/",
    component: ExternalFacingView,
    children: [
      // {
      //   path: "",
      //   redirect: () => ({ name: "Login" }),
      // },
      // {
      //   path: "login",
      //   name: "Login",
      //   beforeEnter: (to, from, next) =>
      //     AdminAuth.checkForSession() ? next({ name: "Admin" }) : next(),
      //   component: AdminLogin,
      // },
      // {
      //   path: "reset",
      //   name: "Reset Password",
      //   component: ResetPassword,
      // },
      // {
      //   path: "forgot-password",
      //   name: "Forgot Password",
      //   component: ForgotPassword,
      // },
    ],
  },
  {
    path: "/join/:code",
    name: "Join",
    redirect: (route: any) => ({
      name: "Join Meeting by Code",
      params: { code: route.params.code },
      query: { passcode: route.query.passcode },
    }),
  },
]

const router = new VueRouter({
  routes,
});

export default router;