import Tag from "./src/tag.vue"
import {App} from "vue"
import {registerInstall} from "@sss-ui-plus/utils";

Tag.install = (Vue:App) => {
    Vue.component('STag',Tag);
}

export default registerInstall(Tag);
export type STagInstance = InstanceType<typeof Tag>
export {
    Tag as STag
}
