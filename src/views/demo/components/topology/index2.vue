<template>
  <div class="">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { Graph } from '@antv/x6'
import { onMounted } from 'vue'
import { GridLayout, CircularLayout, DagreLayout } from '@antv/layout'

import { data } from './data'

onMounted(() => {
  // const data = {
  //   nodes: [],
  //   edges: []
  // }
  const edges = [
    ['1', '2'],
    ['2', '3'],
    ['2', '4'],
    ['4', '5'],
    ['4', '6'],
    ['4', '7'],
    ['4', '8'],
    ['5', '9'],
    ['6', '10'],
    ['7', '11'],
    ['8', '12']
  ]

  for (let i = 1; i <= 12; i++) {
    // data.nodes.push({
    //   id: `${i}`,
    //   // shape: 'circle',
    //   width: 32,
    //   height: 32,
    //   label: i,
    //   attrs: {
    //     body: {
    //       fill: '#5F95FF',
    //       stroke: 'transparent'
    //     },
    //     label: {
    //       fill: '#ffffff'
    //     }
    //   }
    // })
  }

  edges.forEach((edge) => {
    // data.edges.push({
    //   source: edge[0],
    //   target: edge[1],
    //   attrs: {
    //     line: {
    //       stroke: '#A2B1C3',
    //       strokeWidth: 2
    //     }
    //   }
    // })
  })

  const graph = new Graph({
    container: document.getElementById('container'),
    grid: {
      visible: true,
      type: 'doubleMesh',
      args: [
        { color: '#eee', thickness: 1 },
        { color: '#ddd', thickness: 1, factor: 4 }
      ]
    },
    autoResize: true,
    panning: true,
    mousewheel: true,
    width: 1000,
    height: 600,
    background: {
      color: '#F2F7FA'
    }
  })

  const dagreLayout = new DagreLayout({
    type: 'dagre',
    rankdir: 'LR',
    align: 'UR',
    ranksep: 35,
    nodesep: 15
  })
  const model = dagreLayout.layout({
    nodes: data.map((item, index) => {
      return {
        ...item,
        id: item.id + ''
      }
    }),
    edges: []
  })

  graph.fromJSON(model)
})
</script>

<style lang="scss" scoped></style>
