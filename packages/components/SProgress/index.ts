import {App} from "vue";
import Progress from "./src/progress.vue";
import {registerInstall} from "@sss-ui-plus/utils";

Progress.install = function (Vue: App) {
    Vue.component('SProgress', Progress);
}

export default registerInstall(Progress);
export type SProgressInstance = InstanceType<typeof Progress>
export {
    Progress as SProgress
}
