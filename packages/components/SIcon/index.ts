import Icon from "./src/icon.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Icon.install = function (Vue:App) {
    Vue.component("SIcon", Icon);
}


export type SIconInstance = InstanceType<typeof Icon>
export * from "./src/icon.ts"
export {
    Icon as SIcon
}
export default registerInstall(Icon)