import {PropType} from "vue";
import {isString} from "@vue/shared"

const SInputTypes = [
    'text',
    'password',
    'email'
] as const

export const SInputProps = {
    /**
     * @description 输入框类型
     */
    type:{
        type: String as PropType<(typeof SInputTypes)[number]>,
        default: SInputTypes[0],
    },
    modelValue: {
        type: String || Number || null || undefined
    },
    placeholder: String,
    maxLength: Number,
    minLength: Number,
    id: String,
    
    
    autofocus:Boolean,
    disabled:Boolean,
    readonly:Boolean,
    clearable:Boolean,
    showWordLimit:Boolean,
    showPassword:Boolean,
    
    prefixIcon:String,
    suffixIcon:String,
    
    checkFunc:Function as PropType<(value:string, alert:(alertText:string, alertIcon?:string ) => void) => void>
    
    


}



export const SInputEmits = {
    clear: () => true,
    input: (value:String ) => isString(value),
    "update:modelValue": (value:String) => isString(value),
    blur: (evt:FocusEvent)  => evt instanceof FocusEvent,
    focus: (evt:FocusEvent)  => evt instanceof FocusEvent,

} as const