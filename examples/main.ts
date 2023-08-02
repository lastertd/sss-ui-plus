// main.ts
import { createApp } from 'vue'

import App from './App.vue'



import ui from "../index"


const app = createApp(App)

app.use(ui)
app.mount('#app')


