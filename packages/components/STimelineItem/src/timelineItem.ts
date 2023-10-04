import {PropType} from "vue";
import {ElementTypes} from "@sss-ui-plus/typings";


export const STimelineItemProps = {
    /**
     * @description 时间线子项的类型
     */
    type:String as PropType<ElementTypes>,
    /**
     * @description 时间线子项的 '时间'相对于'内容'的定位
     */
    placement:{
        type:String as PropType<'start' | 'end'>,
        default:"end"
    },
    /**
     * @description 时间线子项的图标
     */
    icon:String,
    /**
     * @description 圆圈的颜色
     */
    color:String,
    /**
     * @description 时间线子项的主题
     */
    variant:String as PropType<'empty' | 'default'>,
    /**
     * @description 时间线子项的 '时间'
     */
    time:{
        type:String,
        default:"Unknown time"
    }
}