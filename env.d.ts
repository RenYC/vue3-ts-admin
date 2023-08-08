/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module 'element-plus'

declare module 'vue-virtual-scroller'

declare module 'mockjs'

declare module 'jszip-utils'
declare module 'file-saver'
declare module 'docxtemplater-image-module-free'
