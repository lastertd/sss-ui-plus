import {PropType} from "vue";
import {isString} from "@vue/shared";
import {MessageTriggerTypes} from "../../../src/types";

export const SDialogProps = {
    showFoot:{
      type:Boolean,
      default:false,
    },
    showHead:{
        type:Boolean,
        default:true,
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
    showMark:{
        type:Boolean,
        default:true,
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

    draggable:{
        type:Boolean,
        default:false
    },
    modelValue:{
        type:Boolean,
        default:false,
        required:true,
    },
    top:{
        type:String,
        default:"15vh"
    },
    beforeClose:Function as PropType<(done:() => void) => void>



} as const

export const SDialogEmits = {
    "update:modelValue": (val:Boolean) => true,
    open: () => true,
    opened:() => true,
    close: (trigger: MessageTriggerTypes) => isString(trigger),
    closed:() => true,
    cancel: () => true,
    confirm: () => true,
}