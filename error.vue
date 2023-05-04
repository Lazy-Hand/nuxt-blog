<script setup lang="ts">
import { NButton } from 'naive-ui'

const props = defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="not-container">
    <img src="~/assets/500.png" class="not-img" alt="500">
    <div class="not-detail">
      <h2>500</h2>
      <h4>{{ props.error?.message }}~🤦‍♂️🤦‍♀️</h4>
      <NButton type="primary" @click="handleError">
        返回首页
      </NButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .not-img {
    margin-right: 120px;
  }
  .not-detail {
    display: flex;
    flex-direction: column;
    h2,
    h4 {
      padding: 0;
      margin: 0;
    }
    h2 {
      font-size: 60px;
      color: #434e59;
    }
    h4 {
      margin: 30px 0 20px;
      font-size: 19px;
      font-weight: normal;
      color: #848587;
    }
    .el-button {
      width: 100px;
    }
  }
}
</style>
