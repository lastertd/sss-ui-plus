import Timeline from "./src/timeline.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Timeline.install = (Vue:App) => {
    Vue.component('STimeline',Timeline);
}

export default registerInstall(Timeline);
export type STimelineInstance = InstanceType<typeof Timeline>

export {
    Timeline as STimeline
}