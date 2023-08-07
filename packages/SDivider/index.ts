import Divider from "./src/divider.vue";
import {App} from "vue";


Divider.install = function (Vue:App) {
    Vue.component('SDivider', Divider);
}

export default Divider;