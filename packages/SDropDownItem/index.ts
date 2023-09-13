import DropdownItem from "./src/dropdownItem.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";

DropdownItem.install = function (Vue:App) {
    Vue.component('SDropdownItem',DropdownItem);
}

export default registerInstall(DropdownItem)