import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Home from './views/HomePage.vue';
import About from './views/AboutPage.vue';


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/about', name: 'About', component: About }
	]
})

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
