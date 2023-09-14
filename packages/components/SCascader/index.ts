import Cascader from "./src/cascader.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Cascader.install = function (Vue:App) {
    Vue.component("SCascader",Cascader);
}

export default  registerInstall(Cascader)
export type SCascaderInstance = InstanceType<typeof Cascader>
export * from "./src/cascader.ts"
export {
    Cascader as SCascader
}