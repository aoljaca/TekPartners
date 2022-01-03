import Vue from "vue";
import ExternalFacingView from "../components/shared/ExternalFacingView.vue"
import VueRouter, { RouteConfig } from "vue-router";
import Body from "../components/shared/MainPage/Body.vue"

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
      {
        path: "",
        name: "Body",
        component: Body,
      },
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