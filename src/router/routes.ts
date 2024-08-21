import { RouteRecordRaw } from "vue-router";
import IndexPage from "../views/IndexPage.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "主页",
    component: IndexPage,
  },
  {
    path: "/admin",
    name: "管理页面",
    redirect: "/admin/user",
    children: [
      {
        path: '/admin/user',
        name: '用户管理',
        component: import('../views/admin/AdminUserPage.vue')
      }
    ],
  },
  {
    path: "/user",
    name: '用户界面',
    component: import('../layouts/UserLayout.vue'),
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: import('../views/user/login/UserLoginPage.vue')
      },
      {
        path: '/user/register',
        name: '用户注册',
        component: import('../views/user/register/UserRegisterPage.vue')
      },
    ],
  },
  {
    path: "/account",
    name: "个人页",
    redirect: "/account/center",
    children: [
      {
        path: "/account/center",
        name: "个人中心",
        component: import('../views/account/AccountCenter.vue')
      },
      {
        path: "/account/settings",
        name: "个人设置",
        component: import('../views/account/AccountSettings.vue')
      },
    ],
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: import('../views/exception/NoAuthPage.vue'),
    meta: { hideInMenu: true },
  },
  {
    path: "/404",
    name: "NotFound",
    component: import('../views/exception/NotFoundPage.vue'),
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配404
    redirect: "/404",
    meta: { hideInMenu: true }
  },
];