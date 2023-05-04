<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<template>
  <div bg-white fixed top-0 left-0 right-0 shadow-sm z-1000>
    <div class="h-[60px] " container m-auto flex items-center px-4 justify-between>
      <NButton text strong text-xl @click="navigateTo('/')">
        摸鱼小能手
      </NButton>
      <div i-prime:align-justify w-8 h-8 />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
