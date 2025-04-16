const auth = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/register/register.vue"),
  },
  {
    path: "/forgot_password",
    name: "forgot_password",
    component: () => import("@/views/auth/forgot_password/forgot_password.vue"),
  },
  {
    path: "/reset_password/:token/",
    name: "reset_password",
    component: () => import("@/views/auth/reset_password/reset_password.vue"),
  },
];

export default auth;
