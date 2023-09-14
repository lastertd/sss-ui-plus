import Floating from "./src/floating.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Floating.install = function (Vue:App) {
    Vue.component('SFloating',Floating);
}

export default registerInstall(Floating);
export type SFloatingInstance = InstanceType<typeof Floating>
export * from "./src/floating.ts"
export {
    Floating as SFloating
}