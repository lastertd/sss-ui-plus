// main.ts
import { createApp } from 'vue'

import App from './App.vue'


import "../dist/index.css"
import ui from "../es/index"


const app = createApp(App)

app.use(ui)
app.mount('#app')


