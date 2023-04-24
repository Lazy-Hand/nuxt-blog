<template>
  <div class="pt-[80px]">
    <NResult status="500" title="500 服务器错误" :description="error.message">
      <template #footer>
        <NButton @click="handleError">回到首页</NButton>
      </template>
    </NResult>
  </div>
</template>

<script setup lang="ts">
import { NResult, NButton } from "naive-ui";
const prorps = defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>
