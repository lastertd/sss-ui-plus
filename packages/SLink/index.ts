import Link from "./src/link.vue";
import {App} from "vue";


Link.install = function (Vue:App) {
    Vue.component('SLink', Link);

}

export default Link