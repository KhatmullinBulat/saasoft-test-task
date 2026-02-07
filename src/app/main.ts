import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import './styles/index.css'
import 'unfonts.css'

const pinia = createPinia()
const app = createApp(App)

registerPlugins(app)

app.use(pinia)
app.mount('#app')
