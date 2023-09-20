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
        type:String as PropType<'span' | 's-link'>,
        default:'span'
    },
    href:String,
    jumpMethod:{
        type: String as PropType<'replace' | 'push' | 'newView'>,
        default:'push'
    }
}

export const SDropdownItemEmits = {
    select:(value:string | undefined) => true,
    click:() => true
}