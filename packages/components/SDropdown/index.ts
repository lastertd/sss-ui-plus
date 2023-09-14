import Dropdown from "./src/dropdown.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Dropdown.install = function (Vue:App) {
    Vue.component('SDropdown',Dropdown);
}


export default registerInstall(Dropdown);
export type SDropdownInstance = InstanceType<typeof Dropdown>;
export * from "./src/dropdown.ts";
export {
    Dropdown as SDropdown
}