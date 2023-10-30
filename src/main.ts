import './assets/main.css'
import WebApp from '@twa-dev/sdk'
import { createApp } from 'vue'
import App from './App.vue'
WebApp.ready()
WebApp.expand()
createApp(App).mount('#app')
