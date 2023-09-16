# 快速开始
安装完成?! 是时候在项目中使用了！

## 完整引入
在 `main.ts` / `main.js` 中使用如下语句:
```ts
// main.ts
import { createApp } from 'vue'
import SUI from 'sss-ui-plus'
import "sss-ui-plus/dist/index.css"
import App from './App.vue'

const app = createApp(App)

app.use(SUI)
app.mount('#app')
```


## 按需引入
如果觉得完整引入体积会很大，没关系，我们还支持按需引入!

同样是在`main.ts` / `main.js` 中:
```ts
// main.ts
import { createApp } from 'vue'
import {SButton} from "sss-ui-plus"  //SButton and more!
import "sss-ui-plus/dist/index.css"
import App from './App.vue'

const app = createApp(App)

app.use(SButton)
app.mount('#app')
```

## 开始使用
完成引入之后，你就可以在项目的任意位置使用组件了！关于每个组件的使用方法,每一个组件都有自己的介绍文档，请查阅[组件介绍文档](/comps/basic/button/)