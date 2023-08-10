// main.ts
import { createApp } from 'vue'

import App from './App.vue'

import ui from "../index"

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'


const app = createApp(App)

app.use(ui)
app.use(PerfectScrollbar)
app.mount('#app')


