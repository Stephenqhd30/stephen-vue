<script setup lang="ts">
import {reactive} from 'vue';
import {userRegisterUsingPost} from '@/api/userController.ts';
import {message} from 'ant-design-vue';

const registerForm = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as API.UserRegisterRequest);

/**
 * 用户注册
 */
const handleRegisterSubmit = async () => {
  const { userPassword, checkPassword } = registerForm;
  if (userPassword !== checkPassword) {
    message.error("两次密码不一致");
    return;
  }
  const res = await userRegisterUsingPost(registerForm);
  try {
    if (res.data.code === 0 && res.data.data) {
      message.success("用户注册成功");
    }
  } catch (error: any) {
    message.error("用户注册失败" + error.message);
  }
};
</script>

<template>

</template>

<style scoped>

</style>