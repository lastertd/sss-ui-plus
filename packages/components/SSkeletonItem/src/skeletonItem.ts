import {PropType} from "vue";

export const SSkeletonItemProps = {
    /**
     * @description 骨架屏子项的类型
     */
    type:{
        type:String as PropType<'triangle' | 'rectangle' | 'image'>,
        default:'rectangle',
    },
    /**
     * @description 是否是圆形
     */
    isCircle:Boolean,
    /**
     * @description 是否是圆角
     */
    isRound:Boolean,
}