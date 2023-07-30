import Dialog from "./src/dialog.vue";
import {App} from "vue";

Dialog.install = function (Vue:App) {
    Vue.component("SDialog",Dialog);
}
export default Dialog