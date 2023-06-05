<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  height: 100%;
  :deep(.el-container) {
    height: 100%;
    .el-aside {
      border-right: 1px solid red;
    }
  }
}
</style>
