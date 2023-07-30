import Drawer from "./src/drawer.vue";
import {App} from "vue";


Drawer.install = function (Vue:App) {
    Vue.component('SDrawer', Drawer);
}

export default Drawer