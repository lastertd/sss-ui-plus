import Skeleton from "./src/skeleton.vue";
import {App} from "vue";

Skeleton.install = function (Vue:App) {
    Vue.component('SSkeleton',Skeleton);
}

export default Skeleton;