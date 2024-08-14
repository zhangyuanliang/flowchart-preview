import { createApp } from 'vue'
import App from './app.vue'
import store from './store'
import '@/mock'
import '@/assets/styles/global.less'
// import FlowchartPreview from 'flowchart-preview'

const app = createApp(App)

app.use(store)
// app.use(FlowchartPreview)

app.mount('#app')
