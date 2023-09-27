import {PropType} from "vue";
import {ElementSizes} from "@sss-ui-plus/typings";

export const STimelineProps = {
    direction:String as PropType<'horizontal'>,
    size:String as PropType<ElementSizes>
}