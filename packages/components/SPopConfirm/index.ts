import Popconfirm from "./src/popconfirm.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Popconfirm.install = function (Vue: App) {
    Vue.component('SPopconfirm',Popconfirm);
}

export default registerInstall(Popconfirm);
export type SPopconfirmInstance = InstanceType<typeof Popconfirm>
export * from "./src/popconfirm.ts"
export {
    Popconfirm as SPopconfirm
}