import {App} from "vue";
import Col from "./src/col.vue";
import {registerInstall} from "@sss-ui-plus/utils";

Col.install = function (Vue: App) {
    Vue.component('SCol', Col);
}

export default registerInstall(Col);
export type SColInstance = InstanceType<typeof Col>
export {
    Col as SCol
}
