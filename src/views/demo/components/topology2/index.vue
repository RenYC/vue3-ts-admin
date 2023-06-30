<template>
  <div class="container-wrap">
    <ul ref="elList" class="list">
      <li onMouseDown="startDrag">111</li>
    </ul>
    <div id="container2"></div>
  </div>
</template>

<script setup>
import { Graph } from '@antv/x6'
import { onMounted, ref } from 'vue'
import { Dnd } from '@antv/x6-plugin-dnd'
import { Selection } from '@antv/x6-plugin-selection'
import { Keyboard } from '@antv/x6-plugin-keyboard'

// const elList = ref(null)
let graph = null
let dnd = null
onMounted(() => {
  graph = new Graph({
    container: document.getElementById('container2'),
    grid: {
      visible: true,
      type: 'doubleMesh',
      args: [
        { color: '#eee', thickness: 1 },
        { color: '#ddd', thickness: 1, factor: 4 }
      ]
    },
    autoResize: true,
    // panning: true,
    mousewheel: true,
    width: 1000,
    height: 600,
    background: {
      color: '#F2F7FA'
    }
  })
  graph
    .use(
      new Selection({
        enabled: true,
        multiple: true,
        rubberband: true,
        movable: true,
        showNodeSelectionBox: true
      })
    )
    .use(new Keyboard())

  dnd = new Dnd({
    target: graph,
    scaled: false
  })
  const source = graph.addNode({
    x: 130,
    y: 30,
    width: 100,
    height: 40,
    label: 'Hello',
    attrs: {
      body: {
        stroke: '#8f8f8f',
        strokeWidth: 1,
        fill: '#fff',
        rx: 6,
        ry: 6
      }
    }
  })
  const target = graph.addNode({
    x: 180,
    y: 160,
    width: 100,
    height: 40,
    label: 'World',
    attrs: {
      body: {
        stroke: '#8f8f8f',
        strokeWidth: 1,
        fill: '#fff',
        rx: 6,
        ry: 6
      }
    }
  })

  graph.addEdge({
    source,
    target,
    attrs: {
      line: {
        stroke: '#8f8f8f',
        strokeWidth: 1
      }
    }
  })

  // graph.centerContent()

  const elList = document.querySelector('.list')
  elList.addEventListener('mousedown', (e) => {
    startDrag(e)
  })

  graph.bindKey('backspace', () => {
    console.log(999)
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.removeCells(cells)
    }
  })
})
function startDrag(e) {
  // 该 node 为拖拽的节点，默认也是放置到画布上的节点，可以自定义任何属性
  console.log(e.target.innerText)
  const node = graph.createNode({
    shape: 'rect',
    width: 100,
    height: 40,
    label: e.target.innerText,
    attrs: {
      body: {
        // fill: '#ccc'
      }
    }
  })
  dnd.start(node, e)
}
</script>

<style lang="scss" scoped>
.container-wrap {
  height: 100%;
  display: flex;
  .list {
    margin: 0;
    padding: 0;
    margin-right: 20px;
  }
}
</style>
