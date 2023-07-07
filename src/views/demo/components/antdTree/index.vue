<template>
  <div class="container-wrap">
    <Tree :data="data" class="demo-tree-render"></Tree>
  </div>
</template>

<script setup lang="ts">
import { ref, resolveComponent } from 'vue'
const buttonProps = {
  type: 'default',
  size: 'small'
}
const data = [
  {
    title: 'parent 1',
    expand: true,
    render: (h, { root, node, data }) => {
      return h(
        'span',
        {
          style: {
            display: 'inline-block',
            width: '100%'
          }
        },
        [
          h('span', [
            h(resolveComponent('Icon'), {
              type: 'ios-folder-outline',
              style: {
                marginRight: '8px'
              }
            }),
            h('span', data.title)
          ]),
          h(
            'span',
            {
              style: {
                display: 'inline-block',
                float: 'right',
                marginRight: '32px'
              }
            },
            [
              h(resolveComponent('Button'), {
                ...buttonProps,
                icon: 'ios-add',
                type: 'primary',
                style: {
                  width: '64px'
                },
                onClick: () => {
                  append(data)
                }
              })
            ]
          )
        ]
      )
    },
    children: [
      {
        title: 'child 1-1',
        expand: true,
        id: 1,
        render(h, { root, node, data }) {
          return h(
            'span',
            {
              'data-id': data.id
            },
            data.title
          )
        },
        children: [
          {
            title: 'leaf 1-1-1',
            expand: true,
            id: 2,
            render(h, { root, node, data }) {
              return h(
                'span',
                {
                  'data-id': data.id
                },
                data.title
              )
            }
          },
          {
            title: 'leaf 1-1-2',
            expand: true,
            id: 3,
            render(h, { root, node, data }) {
              return h(
                'span',
                {
                  'data-id': data.id
                },
                data.title
              )
            }
          }
        ]
      },
      {
        title: 'child 1-2',
        expand: true,
        children: [
          {
            title: 'leaf 1-2-1',
            expand: true
          },
          {
            title: 'leaf 1-2-1',
            expand: true
          }
        ]
      }
    ]
  }
]

function append(data) {
  const children = data.children || []
  children.push({
    title: 'appended node',
    expand: true
  })
  data.children = children
}
</script>

<style lang="scss" scoped>
.container-wrap {
  height: 100%;
  display: flex;
}
</style>
