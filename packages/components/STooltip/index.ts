import Tooltip from "./src/tooltip.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Tooltip.install = function (Vue: App) {
    Vue.component('STooltip',Tooltip);
}

export default registerInstall(Tooltip)
export type STooltipInstance = InstanceType<typeof Tooltip>
export * from "./src/tooltip.ts"
export {
    Tooltip as STooltip
}