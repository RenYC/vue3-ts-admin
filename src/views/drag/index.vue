<template>
  <el-tabs v-model="activeName" tab-position="left" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="draggable" name="1">
      <draggableVue></draggableVue>
    </el-tab-pane>
    <el-tab-pane label="GridStack" name="2">
      <GridStack></GridStack>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import draggableVue from './draggable.vue'
import GridStack from './GridStack.vue'

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
