<template>
  <el-tabs v-model="activeName" tab-position="left" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="1. 什么是JavaScript" name="1">
      <page1></page1>
    </el-tab-pane>
    <el-tab-pane label="2. HTML中的JavaScript" name="2">
      <page2></page2>
    </el-tab-pane>
    <el-tab-pane label="3. 语言基础" name="3">
      <page3></page3>
    </el-tab-pane>
    <el-tab-pane label="4. 变量、作用域与内存" name="4">
      <page4></page4>
    </el-tab-pane>
    <el-tab-pane label="5. 基本引用类型" name="5">
      <page5></page5>
    </el-tab-pane>
    <el-tab-pane label="6. 集合引用类型" name="6">
      <page6></page6>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import page1 from './components/第1章-什么是JavaScript/index.vue'
import page2 from './components/第2章-HTML中的JavaScript/index.vue'
import page3 from './components/第3章-语言基础/index.vue'
import page4 from './components/第4章-变量、作用域与内存/index.vue'
import page5 from './components/第5章-基本引用类型/index.vue'
import page6 from './components/第6章-集合引用类型/index.vue'

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
