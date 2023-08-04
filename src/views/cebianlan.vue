<script setup lang="ts">
import { MoreFilled } from "@element-plus/icons-vue";

const activities = [
  {
    content: "相识",
    timestamp: "2023-03-17 下午",
    size: "large",
    type: "primary",
  },
  {
    content: "互相熟悉",
    timestamp: "2023-04-06 晚上",
    size: "large",
  },
  {
    content: "第一次一起活动",
    timestamp: "2023-04-07 下午",
    size: "large",
  },
  {
    content: "第一次操场散步",
    timestamp: "2023-04-07 晚上",
    size: "large",
  },

  {
    content: "第一次跟你表白",
    size: "large",

    timestamp: "2023-04-14 凌晨",
  },
  {
    content: "不知不觉在一起了",
    timestamp: "2023-05-12",
    type: "primary",
    size: "large",

    color: "#f56c6c",
  },

  {
    content: "第一次分手",
    timestamp: "2023-06-18 下午",
    size: "large",
  },
  {
    content: "第一次复合",
    timestamp: "2023-06-21 晚上",
    size: "large",
  },
  {
    content: "第二次分手",
    timestamp: "2023-07-15 晚上",
    size: "large",
  },
  {
    content: "第二次复合",
    timestamp: "2023-07-17 下午",
    size: "large",
  },
  {
    content: "又一次见面",
    size: "large",

    timestamp: "2023-07-28 下午",
  },
  {
    content: "再一次见面",
    size: "large",

    timestamp: "2023-08-11 下午",
  },
  {
    content: "未完待续",
    timestamp: "2033-03-17 下午",
    size: "large",
  },
];
</script>

<template>
  <div class="side">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped>
.side {
  position: fixed;
  top: 15%;
}
</style>
