<script setup lang="ts">
import { getAllImageLinks } from "@/stores/useImages";
import { ref } from "vue";

const loveDay = new Date(2023, 5, 12);
const second = ref(0);
second.value = parseInt(
  String((new Date().getTime() - loveDay.getTime()) / 100)
);
setInterval(() => {
  second.value++;
}, 1000);
const images = getAllImageLinks();
</script>

<template>
  <div class="container">
    <div class="item" v-for="image in images">
      <img :src="image" alt="" />
    </div>
  </div>
  <div class="footer">
    <el-card>
      <p>
        在一起已经：<span class="time">{{ second }}</span> 秒
      </p>
    </el-card>
  </div>
</template>
<style scoped>
.container {
  margin: 0 auto;
  width: 1000px;
  column-count: 3; /* 列数 */
  column-gap: 20px; /* 列间距 */
}

.footer {
  margin-top: 25px;
}

.time {
  font-size: 17px;
  color: #cb6b6b;
}

p {
  text-align: center;
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
