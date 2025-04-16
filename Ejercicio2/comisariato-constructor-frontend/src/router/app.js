const app = [
  {
    path: "/",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/modules/dashboard/dashboard.vue"),
      },
    ],
    meta: { requiresAuth: true },
  },
];

export default app;
