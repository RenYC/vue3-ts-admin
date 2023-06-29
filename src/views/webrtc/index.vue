<template>
  <el-tabs v-model="activeName" tab-position="left" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="RTCDataChannel" name="1">
      <RTCDataChannel></RTCDataChannel>
    </el-tab-pane>
    <el-tab-pane label="getUserMedia" name="2">
      <getUserMedia></getUserMedia>
    </el-tab-pane>
    <el-tab-pane label="RTCPeerConnection" name="3">
      <RTCPeerConnection></RTCPeerConnection>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import RTCDataChannel from './components/RTCDataChannel/index.vue'
import getUserMedia from './components/getUserMedia/index.vue'
import RTCPeerConnection from './components/RTCPeerConnection/index.vue'

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
