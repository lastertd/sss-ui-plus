import {PropType} from "vue";
import "./msgBox.less"
import {isString} from "@vue/shared";
import {ElementSizes, MessageTriggerTypes, MessageTypes,Transition} from "../../../src/types";


export const SMsgBoxProps = {
    type: String as PropType<MessageTypes>,
    icon:String,
    title:{
        type:String,
        default:'default title'
    },
    text:String,
    transition:{
        type:String as PropType<Transition>,
        default:'down-fade'
    },
    closeOnPressEscape:{
      type:Boolean,
      default:true,
    },
    draggable:{
      type:Boolean,
      default:false,
    },
    top:{
        type:String,
    },
    showHead:Boolean,
    showBody:Boolean,
    showFoot:Boolean,
    showClose:Boolean,
    cancelBtnText:{
        type:String,
        default:'取消'
    },
    btnSize:{
        type:String as PropType<ElementSizes>,
        default:"small"
    },
    confirmBtnText:{
        type:String,
        default:'确认',
    },
    beforeClose:Function as PropType<(done:() => void) => void>

} as const





export const SMsgBoxEmits = {
    close: (trigger: MessageTriggerTypes) => isString(trigger),
    closed: () => true,
    open: () => true,
    opened: () => true,
    cancel: () => true,
    confirm: () => true,
    hidden:() => true
} as const