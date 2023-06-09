<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="7. 迭代器与生成器" name="1">
      <page1></page1>
    </el-tab-pane>
    <el-tab-pane label="8. 生成器与异步迭代器" name="2">
      <page2></page2>
    </el-tab-pane>
    <el-tab-pane label="9. 代理与反" name="3">
      <page3></page3>
    </el-tab-pane>
    <el-tab-pane label="10. 代理与反射" name="4">
      <page4></page4>
    </el-tab-pane>
    <el-tab-pane label="11. 代理与反射" name="5">
      <page5></page5>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import page1 from './components/第7章-迭代器与生成器/index.vue'
import page2 from './components/第8章-对象、类与面向对象编程/index.vue'
import page3 from './components/第9章-代理与反射/index.vue'
import page4 from './components/第10章-函数/index.vue'
import page5 from './components/第11章-期约与异步函数/index.vue'

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
