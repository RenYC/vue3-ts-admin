import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/components/layout/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/seniorJS4',
          name: 'seniorJS4',
          // component: () => import('@/views/seniorJS4/index.vue'),
          children: [
            {
              path: '/seniorJS4/base',
              name: 'seniorJS4-base',
              component: () => import('@/views/seniorJS4/base/index.vue')
            }
          ]
        },
        {
          path: '/onLineWord2',
          name: 'onLineWord2',
          component: () => import('@/views/screen/onLineWord2/index.vue')
        },
        {
          path: '/drag',
          name: 'drag',
          component: () => import('@/views/drag/index.vue')
        },
        {
          path: '/rich/echarts',
          name: 'echarts',
          component: () => import('@/views/rich/echarts/index.vue')
        },
        {
          path: '/rich/quillEditor2',
          name: 'quillEditor2',
          component: () => import('@/views/rich/quillEditor/index2.vue')
        }
      ]
    },

    {
      path: '/screenBig',
      name: 'screenBig',
      component: () => import('@/views/screen/screenBig/index.vue')
    },
    {
      path: '/screenBig/screenBigSub',
      name: 'screenBigSub',
      component: () => import('@/views/screen/screenBigSub/index.vue')
    },
    {
      path: '/kpi/cross',
      name: 'kpiCross',
      component: () => import('@/views/screen/kpiCross/index.vue')
    }
  ]
})

export default router
