import Skeleton from "./src/skeleton.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";

Skeleton.install = function (Vue:App) {
    Vue.component('SSkeleton',Skeleton);
}

export default registerInstall(Skeleton);
export type SSkeletonInstance = InstanceType<typeof Skeleton>
export {
    Skeleton as SSkeleton
}