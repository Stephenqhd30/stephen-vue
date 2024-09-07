<script lang="ts" setup>
import MdEditor from '@/components/MdEditor.vue';
import {ref} from 'vue';
import MdViewer from '@/components/MdViewer.vue';

const text = ref<string>('')
const changeText = (value: string) => {
  text.value = value;
}
</script>

<template>
  <MdEditor :text="text" @change="changeText" />
  <MdViewer :text="text" />
</template>

<style scoped></style>