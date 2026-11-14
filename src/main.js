import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// rem 适配
import 'amfe-flexible'

// 全局导入 vant
import Vant from 'vant'
import 'vant/lib/index.css'

import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Vant)
app.mount('#app')
