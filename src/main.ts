import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'

import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

import '@/assets/styles/main.scss'



const app = createApp(App)
app.use(router)
app.use(PerfectScrollbarPlugin);
app.use(createPinia())
app.mount('#app')