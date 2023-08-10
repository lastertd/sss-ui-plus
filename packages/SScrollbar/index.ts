import Scrollbar from "./src/scrollbar.vue";
import {App} from "vue";

Scrollbar.install = function (Vue:App) {
    Vue.component('SScrollbar',Scrollbar);
}

export default Scrollbar;