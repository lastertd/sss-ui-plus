import Switch from "./src/switch.vue";
import {App} from "vue";

Switch.install = function (Vue:App){
    Vue.component("SSwitch",Switch);
}

export default Switch