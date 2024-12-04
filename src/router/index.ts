import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.ts";
import { checkAccess } from "../utils";
import useUserStore from "@/store/modules/user";
import { AccessEnum } from "@/enums/AccessEnum.ts";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 进入页面之前进行权限校验
 */
// @ts-ignore
router.beforeEach(async (to, from, next) => {
  const loginUserStore = useUserStore();
  let loginUser = loginUserStore.loginUser;
  if (!loginUser || !loginUser.userRole) {
    // 加 await 是为了保证用户登陆成功并获取到用户的值之后，在执行后续操作
    await loginUserStore.fetchLoginUser();
    loginUser = loginUserStore.loginUser;
  }
  // 判断当前页面需要的权限
  const needAccess = (to.meta?.access as string) ?? AccessEnum.NOT_LOGIN;
  // 需要跳转的页面必须要登录
  if (needAccess !== AccessEnum.NOT_LOGIN) {
    // 如果没有登录，跳转到登录页面
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === AccessEnum.NOT_LOGIN
    ) {
      next(`/user/login?redirect=${to.fullPath}`);
    }
    // 页面已经登录了, 判断权限是否足够，如果不足，则跳转到无权限界面
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});

export default router;
