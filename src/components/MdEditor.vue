<script lang="ts" setup>
// @ts-ignore
import { Editor } from "@bytemd/vue-next";
import highlight from "@bytemd/plugin-highlight";
import gfm from "@bytemd/plugin-gfm";
import 'bytemd/dist/index.css'
import "highlight.js/styles/vs.css";

const plugins = [
  gfm(),
  highlight(),
  // 这里可以加载更多扩展插件
];

interface Props {
  text: string;
  onChange: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  onChange: () => {},
});
</script>

<template>
  <Editor :plugins="plugins" :value="props.text" @change="props.onChange" />
</template>

<style scoped></style>
