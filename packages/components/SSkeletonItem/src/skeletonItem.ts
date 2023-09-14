import {PropType} from "vue";

export const SSkeletonItemProps = {
    type:{
        type:String as PropType<'triangle' | 'rectangle' | 'image'>,
        default:'rectangle',
    },
    isCircle:Boolean,
    isRound:Boolean,
}