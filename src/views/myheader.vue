<script setup lang="ts">
import { getAllImageLinks } from "@/stores/useImages";

const images = getAllImageLinks();
</script>

<template>
  <el-card>
    <div class="header">
      <div class="item">
        <el-avatar
          size="large"
          src="https://xiaolai0913.oss-cn-shenzhen.aliyuncs.com/%2011.jpg
"
        />
      </div>
      <div class="text">The Story Of 小叶&小赖</div>
      <div class="item">
        <el-avatar
          size="large"
          src="https://xiaolai0913.oss-cn-shenzhen.aliyuncs.com/%2024.jpg"
        />
      </div>
    </div>
  </el-card>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

span {
  font-size: 20px;
  position: relative;
  top: 10px;
}

.text {
  font-size: 30px;
}

.item {
  margin: 0 10px;
}
</style>
