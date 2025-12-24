import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import '@/assets/styles/main.scss'
import '@/assets/styles/themes/_theme.scss'


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')