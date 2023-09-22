import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import './style.css'
import 'element-plus/dist/index.css'
import './assets/icons/icon.css'
import './assets/less/index.less'
import App from './App.vue'
import router from './router'
import api from './api/api'

const app = createApp(App)

app.config.globalProperties.$api = api
app.use(ElementPlus)
app.use(router)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}