import Badge from "./src/badge.vue"
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";

Badge.install = function (Vue:App){
    Vue.component('SBadge', Badge);
}

export default registerInstall(Badge);
export type SBadgeInstance = InstanceType<typeof Badge>
export * from "./src/badge.ts"
export {
    Badge as SBadge
}
