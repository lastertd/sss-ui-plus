import Input from "./src/input.vue";
import {App} from "vue";





Input.install = function (Vue:App) {
    Vue.component('SInput',Input);

}

export default Input