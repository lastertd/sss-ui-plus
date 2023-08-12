import DropdownItem from "./src/dropdownItem.vue";
import {App} from "vue";

DropdownItem.install = function (Vue:App) {
    Vue.component('SDropdownItem',DropdownItem);
}

export default DropdownItem;