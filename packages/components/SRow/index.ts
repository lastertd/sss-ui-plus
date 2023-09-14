import {App} from "vue";
import Row from "./src/row.vue";
import {registerInstall} from "@sss-ui-plus/utils";

Row.install = function (Vue: App) {
    Vue.component('SRow', Row);
}

export default registerInstall(Row);
export type SRowInstance = InstanceType<typeof Row>
export * from "./src/row.ts"
export {
    Row as SRow
}
