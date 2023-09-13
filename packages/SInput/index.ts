import Input from "./src/input.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";





Input.install = function (Vue:App) {
    Vue.component('SInput',Input);

}

export default registerInstall(Input)
