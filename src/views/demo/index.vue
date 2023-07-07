<template>
  <el-tabs v-model="activeName" tab-position="left" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="拓扑" name="1">
      <Topology></Topology>
    </el-tab-pane>
    <el-tab-pane label="拓扑-拖拽" name="2">
      <Topology2></Topology2>
    </el-tab-pane>
    <el-tab-pane label="antd tree" name="3">
      <antdTree></antdTree>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Topology from './components/topology/index.vue'
import Topology2 from './components/topology2/index.vue'
import antdTree from './components/antdTree/index.vue'

const activeName = ref('2')

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
    > div {
      height: 100%;
    }
  }
}
</style>
