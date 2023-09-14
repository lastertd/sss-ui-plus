import Scrollbar from "./src/scrollbar.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";

Scrollbar.install = function (Vue:App) {
    Vue.component('SScrollbar',Scrollbar);
}

export default registerInstall(Scrollbar);
export type SScrollbarInstance = InstanceType<typeof Scrollbar>
export * from "./src/scrollbar.ts"
export {
    Scrollbar as SScrollbar
}