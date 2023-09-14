import Divider from "./src/divider.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Divider.install = function (Vue:App) {
    Vue.component('SDivider', Divider);
}

export default registerInstall(Divider);
export type SDividerInstance = InstanceType<typeof Divider>
export * from "./src/divider.ts"
export {
    Divider as SDivider
}