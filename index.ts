/*css引入 特别注意全局样式最先引入*/
import "./src/styles/animate.css"
import "./src/styles/variable.less"
import "./src/styles/global.less"
import "./src/styles/icons/iconfont.css"

import * as comps from "./packages"

import {App} from "vue";
export * from "./packages"
export * from "./packages/SMessage"


export default (Vue:App) => {
    for (let key in comps){
        Vue.component(key, comps[key]);
    }
}

