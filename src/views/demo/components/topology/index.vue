<template>
  <div class="container-wrap">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { Graph } from '@antv/x6'
import { onMounted } from 'vue'
import { GridLayout, CircularLayout, DagreLayout, ForceLayout } from '@antv/layout'

import { data } from './data'

// const data2 = [...data]

onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('container'),
    grid: {
      visible: true,
      type: 'doubleMesh',
      args: [
        // { color: '#eee', thickness: 1 },
        // { color: '#ddd', thickness: 1, factor: 4 }
      ]
    },
    panning: { enabled: true },
    autoResize: true,
    mousewheel: true,
    width: 1000,
    height: 600,
    background: {
      color: '#F2F7FA'
    },
    // highlighting: {
    //   magnetAdsorbed: {
    //     name: 'stroke',
    //     args: { attrs: { fill: '#5F95FF', stroke: '#5F95FF' } }
    //   },
    //   magnetAvailable: {
    //     name: 'stroke',
    //     args: { padding: 1, attrs: { strokeWidth: 1, stroke: '#52c41a' } }
    //   }
    // },
    connecting: {
      // router: {
      //   name: 'metro',
      //   args: { startDirections: ['bottom'], endDirections: ['top'] }
      // }
      // snap: true,
      // allowBlank: false,
      // allowLoop: false,
      // allowNode: false,
      // highlight: true,
      // validateConnection({ sourceMagnet, targetMagnet }) {
      //   return true
      // }
    }
  })

  const gridLayout = new GridLayout({
    type: 'grid',
    condense: true,
    preventOverlap: true,
    nodeSize: [70, -100],
    cols: 5,
    height: 600
  })

  const circularLayout = new CircularLayout({
    type: 'circular',
    radius: 1500,
    angleRatio: 2
  })

  const dagreLayout = new DagreLayout({
    type: 'dagre',
    rankdir: 'TB',
    align: 'DL',
    ranksep: 15,
    nodesep: 15,
    controlPoints: true
  })
  const model = gridLayout.layout({
    nodes: data.map((item) => {
      return {
        ...item,
        id: item.id + ''
      }
    }),
    edges: []
  })

  // const data2 = data.map((item, index) => {
  //   if (item.attrs.line) {
  //     item.attrs.line.stroke = '#faad14'
  //     // item.attrs.line.stroke = 'rgba(0,0,0,0.3)'
  //     item.attrs.line.targetMarker = {
  //       name: 'block',
  //       offset: 3,
  //       width: 5,
  //       height: 5,
  //       open: true
  //     }
  //     item.connector = 'smooth'
  //     return {
  //       ...item
  //     }
  //   }
  //   return item
  // })
  // const model = circularLayout.layout({
  //   nodes: data2.map((item) => {
  //     return {
  //       ...item,
  //       id: item.id + '',
  //       x: item.position?.x + 100,
  //       y: item.position?.y
  //     }
  //   }),
  //   edges: []
  // })
  // console.log(model)

  // data.pop()
  graph.fromJSON(model) // 渲染元素
  graph.centerContent() // 居中显示
  // graph.zoomToFit({ maxScale: 1 })
  graph.zoomTo(0.5)
})
</script>

<style lang="scss" scoped>
.container-wrap {
  height: 100%;
}
</style>
