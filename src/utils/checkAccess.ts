import { LoginUserVO } from "@/api/types.ts";
import {AccessEnum} from '@/enums/AccessEnum.ts';

/**
 * 检查权限工具类(检查当前登录用户是否有权限)
 * @param loginUser 当前登录的用户
 * @param needAccess
 */
const checkAccess = (
  loginUser: LoginUserVO,
  needAccess = AccessEnum.NOT_LOGIN
) => {
  const loginUserAccess = loginUser?.userRole ?? AccessEnum.NOT_LOGIN;
  // 页面不需要什么权限就可以访问
  if (needAccess === AccessEnum.NOT_LOGIN) {
    return true;
  }
  // 需要用户才能访问
  if (needAccess === AccessEnum.USER) {
    return loginUserAccess !== AccessEnum.NOT_LOGIN;
  }
  // 需要管理员才能访问
  if (needAccess === AccessEnum.ADMIN) {
    // 如果不是管理员，表示无权限
    return loginUserAccess === AccessEnum.ADMIN;
  }
};

export default checkAccess;
