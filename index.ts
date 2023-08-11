/*css引入 特别注意全局样式最先引入*/
import "./src/styles/animate.css"
import "./src/styles/variable.less"
import "./src/styles/global.less"
import "./src/styles/icons/iconfont.css"


import installer from "./installer";
import {onMounted} from "vue";
export * from "./packages"
export * from "./packages/SMessage"



export default installer

