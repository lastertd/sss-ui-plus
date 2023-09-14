import {PropType} from "vue";

const SIconTypes = [
    'i',
    'label',
] as const


export const SIconProps = {
    target:String,
    type: {
        type:String as PropType<(typeof SIconTypes)[number]>,
        default:SIconTypes[0]
    },
    for: String,
    rotating: Boolean,
    color: String,
    noPadding:Boolean
}
