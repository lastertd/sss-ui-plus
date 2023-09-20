import {PropType} from "vue";
import {FloatingTrigger, Transition} from "@sss-ui-plus/typings";
import {Placement} from "@floating-ui/vue";


export const STooltipProps = {
    /**
     * @description floating元素的出现的触发方式
     */
    trigger: {
        type: String as PropType<FloatingTrigger>,
        default: "hover"
    },
    placement: {
        type: String as PropType<Placement>,
        default: "bottom"
    },
    transition: String as PropType<Transition>,
    openDelay: {
        type: Number,
        default: 50
    },
    closeDelay: {
        type: Number,
        default: 200
    },
    disabled: Boolean,
    offset: {
        type: Number,
        default: 10,
    },
    theme: {
        type: String as PropType<'light' | 'dark'>,
        default: 'dark'
    },
    closeOnClickBody: Boolean,
    openOnMounted: Boolean,
    teleported: {
        type: Boolean,
        default: true,
    },
    showArrow: {
        type: Boolean,
        default: true
    },
    floatingClass: String,
    reference: Object as PropType<any>,
    quickTrack: Boolean,

    content: String,


} as const

export const STooltipEmits = {
    open: () => true,
    opened: () => true,
    close: () => true,
    closed: () => true
} as const