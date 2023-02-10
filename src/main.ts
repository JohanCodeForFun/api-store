import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import { createPinia } from "pinia";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router/index'


createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
