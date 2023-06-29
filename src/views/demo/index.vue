<template>
  <el-tabs v-model="activeName" tab-position="left" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="拓扑" name="1">
      <topology></topology>
    </el-tab-pane>
    <el-tab-pane label="11" name="2"> 222 </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import topology from './components/topology/index.vue'

const activeName = ref('1')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
}
</script>

<style scoped lang="scss">
.demo-tabs {
  height: 100%;
  :deep(.el-tabs__content) {
    padding: 32px;
    color: #6b778c;
    height: 100%;
    overflow: auto;
    font-size: 14px;
  }
}
</style>
