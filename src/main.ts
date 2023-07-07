import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import ViewUIPlus from 'view-ui-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import '@/assets/css/style.css'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import App from './App.vue'
import router from './router'
import '@/utils/flexible.js' //屏幕自适应

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(ViewUIPlus)

app.mount('#app')
