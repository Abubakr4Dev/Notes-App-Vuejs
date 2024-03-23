import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginView.vue";
import RegisterPage from "@/views/RegisterView.vue";
import { useStore } from "@/stores";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RegisterPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/notes",
      name: "notes",
      component: () => import("../views/NotesView.vue"), // @
      beforeEnter(to: any, from: any, next: any) {
        const store = useStore();
        console.log(store.getToken);
        if (!store.getToken) {
          next({ name: "login" });
        } else {
          next();
        }
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
