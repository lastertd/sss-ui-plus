import Icon from "./src/icon.vue";
import {App} from "vue";

Icon.install = function (Vue:App) {
    Vue.component("SIcon", Icon);
}


export default Icon