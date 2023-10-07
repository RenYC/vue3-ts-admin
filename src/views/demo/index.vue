<template>
  <el-tabs v-model="activeName" tab-position="left" class="demo-tabs" @tab-click="handleClick">
    <!-- <el-tab-pane label="拓扑" name="1">
      <Topology></Topology>
    </el-tab-pane>
    <el-tab-pane label="拓扑-拖拽" name="2">
      <Topology2></Topology2>
    </el-tab-pane>
    <el-tab-pane label="antd tree" name="3">
      <antdTree></antdTree>
    </el-tab-pane>
    <el-tab-pane label="前端导出excel" name="4">
      <excelVue></excelVue>
    </el-tab-pane>
    <el-tab-pane label="虚拟长列表" name="5">
      <bigData></bigData>
    </el-tab-pane>
    <el-tab-pane label="webGL" name="6">
      <webGL></webGL>
    </el-tab-pane>
    <el-tab-pane label="前端导出word" name="7">
      <exportWord></exportWord>
    </el-tab-pane> -->
    <el-tab-pane label="spreadjs" name="8">
      <spreadjs></spreadjs>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Topology from './components/topology/index.vue'
import Topology2 from './components/topology2/index.vue'
import antdTree from './components/antdTree/index.vue'
import excelVue from './components/excel/index.vue'
import bigData from './components/bigData/index.vue'
import webGL from './components/webGL/index.vue'
import exportWord from './components/exportWord/index.vue'
import spreadjs from './components/spreadjs/index.vue'

const activeName = ref('8')

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
