<template>
  <div>
    <h1 text-green-600>Index Page</h1>
    <nuxt-link to="/detail/1">Detail Page -1</nuxt-link>
    <NButton>按钮</NButton>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
</script>
