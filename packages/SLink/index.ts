import Link from "./src/link.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Link.install = function (Vue:App) {
    Vue.component('SLink', Link);

}

export default registerInstall(Link)