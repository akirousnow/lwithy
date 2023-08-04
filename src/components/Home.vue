<script setup lang="ts">
import { getAllImageLinks } from "@/stores/useImages";
</script>

<template>
  <div class="container">
    <div class="item" v-for="image in getAllImageLinks()">
      <img src="image" alt="" />
    </div>
  </div>
</template>
<style scoped>
.container {
  margin: 0 auto;
  width: 1000px;
  column-count: 5; /* 列数 */
  column-gap: 20px; /* 列间距 */
}

.item {
  margin-bottom: 10px;
  /* 防止多列布局，分页媒体和多区域上下文中的意外中断 */
  break-inside: avoid;
}

.item img {
  width: 100%;
  height: 100%;
}
</style>
