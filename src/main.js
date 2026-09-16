import { createApp } from 'vue'
import App from './App.vue' 
import router from './router'

const app = create(App)

app.use(router)

app.mount('#app')