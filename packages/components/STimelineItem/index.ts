import TimelineItem from "./src/timelineItem.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


TimelineItem.install = (Vue:App) => {
    Vue.component('STimelineItem',TimelineItem);
}

export default registerInstall(TimelineItem);
export type STimelineItemInstance = InstanceType<typeof TimelineItem>

export {
    TimelineItem as STimelineItem
}