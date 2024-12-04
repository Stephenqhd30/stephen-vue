<script lang="ts" setup>
import { reactive, ref } from "vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { userLoginUsingPost } from "@/api/userController.ts";
import useUserStore from "@/store/modules/user";
import {
  GithubOutlined,
  LockOutlined,
  QqOutlined,
  UserOutlined,
  WeiboOutlined,
} from "@ant-design/icons-vue";

const loginUserStore = useUserStore();
const router = useRouter();
const loading = ref<boolean>(false);

const loginForm = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

/**
 * 用户登录
 */
const handleLoginSubmit = async () => {
  loading.value = true;
  const res = await userLoginUsingPost(loginForm);
  try {
    if (res.data.code === 0 && res.data.data) {
      localStorage.setItem('stephen-vue-token', res.data.data.token)
      await loginUserStore.fetchLoginUser();
      message.success("用户登录成功");
      await router.push({
        path: "/",
        replace: true,
      });
    }
  } catch (error: any) {
    message.error("用户登录失败" + error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="login-page">
    <a-form :model="loginForm">
      <a-form-item
        :rules="[{ required: true, message: '请输入账号!' }]"
        label="账号"
        name="userAccount"
        style="margin-top: 24px"
      >
        <a-input v-model:value="loginForm.userAccount">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        :rules="[{ required: true, message: '请输入密码!' }]"
        label="密码"
        name="userPassword"
      >
        <a-input-password v-model:value="loginForm.userPassword">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button :loading="loading" type="primary" @click="handleLoginSubmit">
          登录
        </a-button>
        <a-button type="link">去注册</a-button>
      </a-form-item>

      <a-divider>其他登录方式</a-divider>
      <a-form-item style="text-align: center">
        <a-space size="large">
          <WeiboOutlined style="font-size: 2em; color: #f50" />
          <QqOutlined style="font-size: 2em; cursor: pointer; color: #2b92e4" />
          <GithubOutlined
            style="font-size: 2em; cursor: pointer; color: #333"
          />
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
#login-page {
  width: 100%;
  background: transparent !important;
  margin: 24px;
}
</style>
