//import WebApp from '@twa-dev/sdk'
import { createApp } from 'vue'
import "primevue/resources/themes/lara-dark-blue/theme.css";
import './style.css'
import PrimeVue from 'primevue/config';
import SendTX from './components/SendTX.vue';
import App from './App.vue'
//WebApp.ready()
createApp(App).use(PrimeVue).component('SendTX',SendTX).mount('#app')
