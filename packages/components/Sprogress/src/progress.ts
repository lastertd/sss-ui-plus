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
    color: [String, Function] as PropType<string | ((percentage: number) => string) >,
    icon:String



} as const
