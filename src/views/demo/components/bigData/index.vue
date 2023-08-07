<template>
  <div class="container">
    <RecycleScroller
      class="scroller"
      :items="data"
      :item-size="60"
      key-field="id"
      v-slot="{ item }"
    >
      <span class="text">{{ item.name }}</span>
      <span class="text">{{ item.age }}</span>
      <span class="text address">{{ item.address }}</span>
    </RecycleScroller>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import mockjs from 'mockjs'
import { data as list } from './data'

const data = ref(list)
console.log(data.value)
</script>

<style scoped lang="scss">
.container {
  height: 100%;
}
.scroller {
  height: 100%;
}

.text {
  display: inline-block;
  width: 100px;
  text-align: center;
}
.address {
  width: 300px;
}
</style>
