import Cascader from "./src/cascader.vue";
import {App} from "vue";

Cascader.install = function (Vue:App) {
    Vue.component("SCascader",Cascader);
}

export default  Cascader;