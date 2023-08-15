import SkeletonItem from "./src/skeletonItem.vue";
import {App} from "vue";

SkeletonItem.install = function (Vue:App) {
    Vue.component("SSkeletonItem",SkeletonItem);
}

export default SkeletonItem