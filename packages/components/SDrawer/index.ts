import Drawer from "./src/drawer.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";



Drawer.install = function (Vue:App) {
    Vue.component('SDrawer', Drawer);
}

export default registerInstall(Drawer);
export type SDrawerInstance = InstanceType<typeof Drawer>
export * from "./src/drawer.ts"
export {
    Drawer as SDrawer
}