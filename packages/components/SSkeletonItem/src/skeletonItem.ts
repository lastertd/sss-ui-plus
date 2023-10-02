import {PropType} from "vue";

export const SSkeletonItemProps = {
    /**
     * @description 骨架屏子项的类型
     */
    variant:{
        type:String as PropType<'triangle' | 'rectangle' | 'image'>,
        default:'rectangle',
    },
    /**
     * @description 是否是圆形
     */
    circle:Boolean,
    /**
     * @description 是否是圆角
     */
    round:Boolean,
}