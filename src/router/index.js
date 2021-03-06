import Vue from "vue";
// 导入路由
import VueRouter from "vue-router";
// 注册路由的插件，把路由关联到vue。固定要加的

Vue.use(VueRouter);

// 路由配置
const routes = [
  //首页
  {
    path: "/",
    component: () => import("@/views/Index"),
  },
  {
    path: "/login",
    // 除了首页之外的页面都可以用懒加载,@符号代表的src这个目录
    // .vue这个扩展名可以忽略
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/Register"),
  },
  {
    path: "/personal",
    component: () => import("@/views/Personal"),
    meta: {
      authorization: true,
    },
  },
  {
    path: "/edit-profile",
    component: () => import("@/views/EditProfile"),
    meta: {
      authorization: true,
    },
  },
  {
    path: "/follow",
    component: () => import("@/views/Follow"),
    meta: {
      authorization: true,
    },
  },
  {
    path: "/comment",
    component: () => import("@/views/Comment"),
    meta: {
      authorization: true,
    },
  },
  {
    path: "/star",
    component: () => import("@/views/Star"),
    meta: {
      authorization: true,
    },
  },
  {
    path: "/category",
    component: () => import("@/views/Category.vue"),
    meta: {
      authorization: true,
    },
  },
  {
    path: "/search",
    component: () => import("@/views/Search"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  //路由配置
  routes,
});

export default router;
