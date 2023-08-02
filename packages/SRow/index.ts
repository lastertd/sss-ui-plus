import {App} from "vue";
import Row from "./src/row.vue";

Row.install = function (Vue:App) {
    Vue.component('SRow',Row);
}

export default Row;