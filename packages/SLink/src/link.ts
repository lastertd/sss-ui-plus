import {PropType} from "vue";
import "./link.less"

const SLinkTypes =  [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
] as const;

export const SLinkProps = {
    type:{
        type: String as PropType<(typeof SLinkTypes)[number]>,
        default:SLinkTypes[0]
    },
    disabled:Boolean,
    underline:Boolean,
    href:String,
    prefixIcon:String,
    suffixIcon:String

}