import './assets/main.css'
import WebApp from '@twa-dev/sdk'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
WebApp.ready()
WebApp.expand()