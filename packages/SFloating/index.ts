import Floating from "./src/floating.vue";
import {App} from "vue";

Floating.install = function (Vue:App) {
    Vue.component('SFloating',Floating);
}

export default Floating;