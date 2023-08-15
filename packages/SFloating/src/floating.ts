import {PropType} from "vue";
import {Expression, FloatingTrigger, Transition} from "../../../src/types";
import {Placement} from "@floating-ui/vue";


export const SFloatingProps = {
    /**
     * @description floating元素的出现的触发方式
     */
    trigger: {
        type: String as PropType<FloatingTrigger>,
        default: "click"
    },
    placement: {
        type: String as PropType<Placement>,
        default: "bottom"
    },
    transition:{
        type:String as PropType<Transition>,
        default:"fade"
    },
    openDelay:{
        type:Number,
        default:0
    },
    closeDelay:{
        type:Number,
        default:0
    },
    disabled:Boolean,
    offset:{
        type:Number,
        default:5,
    },
    theme:{
        type: String as PropType<'light' | 'dark'>,
        default:'light'
    },
    closeOnClickBody:Boolean,
    openOnMounted:Boolean,
    teleported:{
        type:Boolean,
        default:true,
    },
    showArrow: Boolean,
    expression:{
        type:String as PropType<Expression>,
        default:'block'
    },
    floatingClass:String,
    reference:Object as PropType<any>,
    quickTrack:Boolean,



} as const

export const SFloatingEmits = {
    open:() => true,
    opened:() => true,
    close:() => true,
    closed: () => true
} as const