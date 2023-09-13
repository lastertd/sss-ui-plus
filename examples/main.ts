// main.ts
import { createApp } from 'vue'

import App from './App.vue'

/*css引入 特别注意全局样式最先引入*/

import ui from "../index"





const app = createApp(App)
app.use(ui,{
    zIndex:3000
})




app.mount('#app')


