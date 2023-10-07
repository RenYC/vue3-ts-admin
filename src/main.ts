import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import ViewUIPlus from 'view-ui-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import '@/assets/css/style.css'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import { GcSpreadSheets, GcWorksheet, GcColumn } from '@grapecity/spread-sheets-vue'

import App from './App.vue'
import router from './router'
import '@/utils/flexible.ts' //屏幕自适应
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueVirtualScroller from 'vue-virtual-scroller'

const app = createApp(App)
app.use(VueVirtualScroller)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(ViewUIPlus)
app.component('gc-spread-sheets', GcSpreadSheets);
app.component('gc-worksheet', GcWorksheet);
app.component('gc-column', GcColumn);
app.mount('#app')
