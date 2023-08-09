import Popconfirm from "./src/popconfirm.vue";
import {App} from "vue";

Popconfirm.install = function (Vue: App) {
    Vue.component('SPopconfirm',Popconfirm);
}

export default Popconfirm;