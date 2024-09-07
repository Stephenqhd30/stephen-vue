<script lang="ts" setup>
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
// @ts-ignore
import { Viewer } from "@bytemd/vue-next";
import 'bytemd/dist/index.css'
import "highlight.js/styles/vs.css";

/**
 * 定义组件属性类型
 */
interface Props {
  text: string;
}

/**
 * 给组件指定初始值
 */
// @ts-ignore
const props = withDefaults(defineProps<Props>(), {
  text: "",
});

const plugins = [
  gfm(),
  highlight(),
  // 这里可以加载更多扩展插件
];
</script>

<template>
  <Viewer :plugins="plugins" :value="props.text" />
</template>

<style scoped></style>
