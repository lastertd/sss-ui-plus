import {PropType} from "vue";


export const SSwitchProps = {
    defaultColor:String,
    activeColor:String,
    defaultText:String,
    activeText:String,
    defaultIcon:String,
    activeIcon:String,
    loading:Boolean,
    disabled:Boolean,
    inlineText:Boolean,
    modelValue: Boolean,
    beforeChange:Function as PropType<(done:() => void) => void>
} as const


export const SSwitchEmits = {
    "update:modelValue":(val:Boolean) => true,
    change:(status:'active' | 'default') => true
}