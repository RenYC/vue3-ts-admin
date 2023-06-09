<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="12. BOM" name="1">
      <page1></page1>
    </el-tab-pane>
    <el-tab-pane label="13. 客户端检测" name="2">
      <page2></page2>
    </el-tab-pane>
    <el-tab-pane label="14. DOM" name="3">
      <page3></page3>
    </el-tab-pane>
    <el-tab-pane label="15. DOM 扩展" name="4">
      <page4></page4>
    </el-tab-pane>
    <el-tab-pane label="16. DOM2和DOM3" name="5">
      <page5></page5>
    </el-tab-pane>
    <el-tab-pane label="17. 事件" name="6">
      <page6></page6>
    </el-tab-pane>
    <el-tab-pane label="18. 动画与Canvas" name="7">
      <page7></page7>
    </el-tab-pane>
    <el-tab-pane label="19. 表单脚本" name="8">
      <page8></page8>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import page1 from './components/第12章-BOM/index.vue'
import page2 from './components/第13章-客户端检测/index.vue'
import page3 from './components/第14章-DOM/index.vue'
import page4 from './components/第15章-DOM 扩展/index.vue'
import page5 from './components/第16章-DOM2和DOM3/index.vue'
import page6 from './components/第17章-事件/index.vue'
import page7 from './components/第18章-动画与Canvas 图形/index.vue'
import page8 from './components/第19章-表单脚本/index.vue'

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
    font-size: 32px;
    font-weight: 600;
    height: 100%;
    overflow: auto;
  }
}
</style>
