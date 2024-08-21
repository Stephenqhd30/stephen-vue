<script lang="ts" setup>
import {computed, ref} from 'vue';
import {TITLE} from '@/constants';
import {useRoute, useRouter} from 'vue-router';
import checkAccess from '@/utils/checkAccess.ts';
import {routes} from '@/router/routes.ts';
import useUserStore from '@/store/modules/user';
import AvatarDropDown from '@/components/GlobalHeader/AvatarDropDown.vue';

const route = useRoute();
const router = useRouter();

// 当前选中的菜单项
const activeKey = ref([route.path]);
const userState = useUserStore();
const loginUser = userState.loginUser;
/**
 * 可以展示的菜单项目
 */
const visibleRoutes = computed(() => {
  return routes.filter((route) => {
    // 如果路由有 hideInMenu 属性并且为 true，则不展示
    if (route.meta?.hideInMenu) {
      return false;
    }
    // 检查权限
    return checkAccess(userState.loginUser, route.meta?.access as string);
  });
});

/**
 * 点击菜单跳转到对应页面
 * @param key
 */
const doMenuClick = ({key}: { key: string }) => {
  activeKey.value = key;
  router.push({
    path: key
  });
};
</script>

<template>
  <a-layout-header id="layout-header">
    <a-row class="header-content" justify="space-between">
      <a-col flex="200px">
        <img alt="logo" class="logo" src="../../assets/logo.png"/>
        <span class="title">{{ TITLE }}</span>
      </a-col>
      <a-col flex="auto">
        <a-menu
            v-model:selectedKeys="activeKey"
            mode="horizontal"
            theme="light"
            @click="doMenuClick"
        >
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            <span>{{ item.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="200px">
        <template v-if="!loginUser">
          <a-button type="primary">登录</a-button>
        </template>
        <template v-else>
          <AvatarDropDown :user="loginUser" />
        </template>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<style scoped>
#layout-header {
  background-color: white;
  padding: 0 24px;
  box-shadow: #eee 1px 1px 4px; /* 添加阴影效果 */
  align-items: center;

  .header-content {
    height: 64px; /* 确保头部高度 */
  }

  .logo {
    height: 40px;
  }

  .title {
    margin-left: 8px;
  }
}

a-menu {
  line-height: 64px; /* 确保菜单项垂直居中 */
}

a-menu-item {
  display: flex;
  align-items: center;
  color: #333; /* 修改字体颜色 */
}

a-menu-item:hover {
  color: #1890ff; /* 悬停时的字体颜色 */
}
</style>
