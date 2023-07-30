import {PropType} from "vue";
import {isString} from "@vue/shared";
import {ElementSizes, MessageTriggerTypes, MessageTypes} from "../../../src/types";

type positions = 'top' | 'right' | 'bottom' | 'left';

export const SDrawerProps = {
    showFoot:{
        type:Boolean,
        default:true,
    },
    showHead:{
        type:Boolean,
        default:true,
    },
    btnSize:{
        type:String as PropType<ElementSizes>,
        default:"normal"
    },
    cancelBtnText:{
        type:String,
        default:'取消'
    },
    confirmBtnText:{
        type:String,
        default:'确认',
    },
    title:{
        type:String,
        default:'default title'
    },
    closeOnClickMark:{
        type:Boolean,
        default:true,
    },

    closeOnPressEscape:{
        type:Boolean,
        default:true
    },
    lockScroll:{
        type:Boolean,
        default:true,
    },
    appendToBody:{
        type:Boolean,
        default:false,
    },
    showMark:{
        type:Boolean,
        default:true,
    },
    modelValue:{
        type:Boolean,
        default:false,
        required:true,
    },
    position:{
        type:String as PropType<positions>,
        default: 'top',
    },
    beforeClose:Function as PropType<(done:() => void) => void>



} as const

export const SDialogEmits = {
    "update:modelValue": (val) => typeof val === 'boolean',
    open: () => true,
    opened:() => true,
    close: (trigger: MessageTriggerTypes) => isString(trigger),
    closed:() => true,
    cancel: () => true,
    confirm: () => true,
}