<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="20. JavaScriptAPI" name="1">
      <page1></page1>
    </el-tab-pane>
    <el-tab-pane label="21. 错误处理与调试" name="2">
      <page2></page2>
    </el-tab-pane>
    <el-tab-pane label="22. 处理XML" name="3">
      <page3></page3>
    </el-tab-pane>
    <el-tab-pane label="23. JSON" name="4">
      <page4></page4>
    </el-tab-pane>
    <el-tab-pane label="24. 网络请求与远程资源" name="5">
      <page5></page5>
    </el-tab-pane>
    <el-tab-pane label="25. 客户端存储index" name="6">
      <page6></page6>
    </el-tab-pane>
    <el-tab-pane label="26. 模块" name="7">
      <page7></page7>
    </el-tab-pane>
    <el-tab-pane label="27. 工作者线程" name="8">
      <page8></page8>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import page1 from './components/第20章-JavaScriptAPI/index.vue'
import page2 from './components/第21章-错误处理与调试/index.vue'
import page3 from './components/第22章-处理XML/index.vue'
import page4 from './components/第23章-JSON/index.vue'
import page5 from './components/第24章-网络请求与远程资源/index.vue'
import page6 from './components/第25章-客户端存储/index.vue'
import page7 from './components/第26章-模块/index.vue'
import page8 from './components/第27章-工作者线程/index.vue'

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
