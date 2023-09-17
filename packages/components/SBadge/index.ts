import Badge from "./src/badge.vue"
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";

(Badge as any).install = function (Vue:App){
    Vue.component('SBadge', Badge);
}

export default registerInstall(Badge);
export type SBadgeInstance = InstanceType<typeof Badge>
export {
    Badge as SBadge
}
