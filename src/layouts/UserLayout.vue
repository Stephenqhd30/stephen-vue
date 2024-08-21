<script lang="ts" setup>
import {
  AUTHOR,
  AUTHOR_NAME,
  BLOG,
  GITHUB,
  SUBTITLE,
  TITLE,
} from "@/constants";
import { CopyrightCircleOutlined, GithubOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <div id="user-layout">
    <a-space direction="vertical">
      <a-layout style="height: 100vh">
        <!--网页全局头部-->
        <a-layout-header class="header">
          <a-space>
            <img alt="logo" class="logo" src="/public/logo.png" />
            <div class="title">{{ TITLE }}</div>
          </a-space>
          <div class="sub-title">{{ SUBTITLE }}</div>
        </a-layout-header>
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
        <!--网页全局底部-->
        <a-layout-footer class="footer">
          <a-space size="small">
            <a-typography-link :href="GITHUB" class="link" target="_blank">
              {{ TITLE }}
            </a-typography-link>
            <GithubOutlined />
            <a-typography-link :href="BLOG" class="link" target="_blank">
              {{ AUTHOR_NAME }}
            </a-typography-link>
          </a-space>
          <div>
            <CopyrightCircleOutlined />
            by {{ AUTHOR }}
          </div>
        </a-layout-footer>
      </a-layout>
    </a-space>
  </div>
</template>

<style lang="less" scoped>
#user-layout {
  text-align: center;
  /* 设置与背景图一致的背景颜色 */
  background: #f0f2f5 url("../assets/background.svg") no-repeat fixed;

  .ant-layout,
  .ant-layout-header,
  .ant-layout-content,
  .ant-layout-footer {
    background-color: transparent !important; /* 强制透明背景色 */
  }

  .header,
  .content,
  .footer {
    background-color: transparent; /* 确保各部分透明，继承全局背景 */
  }

  .header {
    margin-top: 64px;
    padding: 0 24px;

    .logo {
      height: 40px;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      color: #1d1d1f;
      margin-left: 16px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .sub-title {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.65);
      margin-top: 8px;
      margin-bottom: 40px;
      font-style: italic;
    }
  }

  .content {
    padding: 50px 24px 84px;
    border-radius: 8px;
  }

  .footer {
    text-align: center;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;

    .link {
      color: #000000a6;
    }
  }
}
</style>