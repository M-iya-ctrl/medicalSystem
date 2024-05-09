import { createApp } from 'vue'
// 引入默认样式
import '@/style/index.scss'
// 引入根组件
import App from './App.vue'
// 引入全局组件 Header Footer
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
// 引入路由
import router from '@/router'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

const app = createApp(App)
// 注册全局组件
app.component("Header", Header)
app.component("Footer", Footer)

// 安装路由
app.use(router)
// 安装 elementplus
app.use(ElementPlus, {
  locale: zhCn,
})

// 挂载
app.mount('#app')
