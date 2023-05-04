<script setup lang="ts">
import { NButton, NDropdown, useMessage } from 'naive-ui'

const options = [
  {
    label: '首页',
    key: 'index',
  },
  {
    label: '随笔记',
    key: 'essay',
  },
  {
    label: '闲言',
    key: 'gossip',
  },
  {
    label: '时光轴',
    key: 'timeAxis',
  },
  {
    label: '经验分享',
    key: 'blog',
  },
  {
    label: '酷爱历史',
    key: 'history',
  },
  {
    label: '关于我',
    key: 'my',
  },
]
function handleSelect(key: string) {
  useMessage().success(`你选择了${key}`)
}
</script>

<template>
  <div bg-white fixed top-0 left-0 right-0 shadow-sm z-1000>
    <div class="h-[60px] " container m-auto flex items-center px-4 justify-between>
      <NButton text strong text-xl @click="navigateTo('/')">
        摸鱼小能手
      </NButton>
      <NDropdown trigger="click" :options="options" @select="handleSelect">
        <div i-prime:align-justify w-8 h-8 />
      </NDropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
