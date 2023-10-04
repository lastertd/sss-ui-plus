import {PropType} from "vue";
import {ElementTypes} from "@sss-ui-plus/typings";



export const SProgressProps = {
    percentage: {
        type: Number,
        required: true,
    },
    variant: String as PropType<'line' >,
    type: String as PropType<ElementTypes>,
    textStatus:String as PropType<'inside' | 'outside'>,
    color: [String, Function, Array] as PropType<string | ((percentage: number) => string) | Array<string> >,
    icon:String



} as const
