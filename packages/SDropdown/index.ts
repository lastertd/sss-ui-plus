import Dropdown from "./src/dropdown.vue";
import {App} from "vue";

Dropdown.install = function (Vue:App) {
    Vue.component('SDropdown',Dropdown);
}


export default Dropdown;