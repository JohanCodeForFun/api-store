import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import { createPinia } from "pinia";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App)
// .use(bootstrap)
.use(createPinia())
.mount('#app')
