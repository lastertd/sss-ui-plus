import {isString} from "@vue/shared";
import {PropType} from "vue";

export const SDropdownItemProps = {
    suffixIcon:String,
    prefixIcon:String,
    label:String,
    value:String,
    closeOnClick:{
        type:Boolean,
        default:true,
    },
    isActive:Boolean,
    disabled:Boolean,

    tag:{
        type:String as PropType<'div' | 's-link'>,
        default:'div'
    },
    href:String,
    jumpMethod:{
        type: String as PropType<'replace' | 'push' | 'newView'>,
        default:'push'
    }
}

export const SDropdownItemEmits = {
    select:(value:string | undefined) => isString(value),
    click:() => true
}