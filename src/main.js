import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HeaderNav from './components/HeaderNav.vue'

const app = createApp(App)

app.component('HeaderNav', HeaderNav)

app.mount('#app')
