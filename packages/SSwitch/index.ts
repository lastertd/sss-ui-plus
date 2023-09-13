import Switch from "./src/switch.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";

Switch.install = function (Vue:App){
    Vue.component("SSwitch",Switch);
}

export default registerInstall(Switch)