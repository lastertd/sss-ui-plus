import {PropType} from "vue";
import {Expression, FloatingTrigger, Transition} from "../../../src/types";
import {Placement} from "@floating-ui/vue";
import {MessageTypes} from "../../../src/types";


export const SPopconfirmProps = {
    /**
     * @description floating元素的出现的触发方式
     */
    trigger: {
        type: String as PropType<FloatingTrigger>,
        default: "clickToOpen"
    },
    placement: {
        type: String as PropType<Placement>,
        default: "bottom"
    },
    transition:{
        type:String as PropType<Transition>,
        default:"scale"
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
        default:10,
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
    showArrow:{
        type: Boolean,
        default:true
    },
    expression:{
        type:String as PropType<Expression>,
        default:'block'
    },
    floatingClass:String,
    reference:Object as PropType<any>,
    quickTrack:Boolean,

    content:String,

    type:String as PropType<MessageTypes>,
    cancelBtnText:{
        type:String,
        default:'取消'
    },
    confirmBtnType:{
        type:String,
        default:'确认'
    },



} as const

export const SPopconfirmEmits = {
    open:() => true,
    opened:() => true,
    close:() => true,
    closed: () => true,
    cancel:() => true,
    confirm: () => true
} as const