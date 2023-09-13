import Icon from "./src/icon.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";

Icon.install = function (Vue:App) {
    Vue.component("SIcon", Icon);
}


export default registerInstall(Icon)