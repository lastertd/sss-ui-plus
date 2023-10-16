import {App} from "vue";
import Flex from "./src/flex.vue";
import {registerInstall} from "@sss-ui-plus/utils";

Flex.install = function (Vue: App) {
    Vue.component('SFlex', Flex);
}

export default registerInstall(Flex);
export type SFlexInstance = InstanceType<typeof Flex>
export {
    Flex as SFlex
}
