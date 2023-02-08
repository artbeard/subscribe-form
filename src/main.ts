import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App)
	.directive('focus', {
		mounted: (el: HTMLInputElement) => el.focus()
	})
	.mount('#app')
