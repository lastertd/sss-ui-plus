import SkeletonItem from "./src/skeletonItem.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";

SkeletonItem.install = function (Vue:App) {
    Vue.component("SSkeletonItem",SkeletonItem);
}

export default registerInstall(SkeletonItem)
export type SSkeletonItemInstance = InstanceType<typeof SkeletonItem>
export {
    SkeletonItem as SSkeletonItem
}