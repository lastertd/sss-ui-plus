import Tooltip from "./src/tooltip.vue";
import {App} from "vue";


Tooltip.install = function (Vue: App) {
    Vue.component('STooltip',Tooltip);
}

export default Tooltip