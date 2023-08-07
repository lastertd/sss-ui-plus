
import {PropType} from "vue";


const sButtonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    'cyan',
    'dark'
] as const;


    const sButtonNativeTypes = ['button', 'submit', 'reset'] as const;
const sElementSize = ['normal', 'small', 'large'] as const;


export const SButtonProps = {
    /**
     * @description 按钮类型
     */
    type:{
        type: String as PropType<(typeof sButtonTypes)[number]>,
        default: sButtonTypes[0],
    },
    /**
     * @description 按钮原生类型
     */
    nativeType:{
        type: String as PropType<(typeof sButtonNativeTypes)[number]>,
        default:sButtonNativeTypes[0]
    },
    /**
     * @description 按钮大小
     */
    size:{
        type: String as PropType<(typeof sElementSize)[number]>,
        default:sElementSize[0]
    },
    /**
     * @description 是否是圆角
     */
    round:Boolean,
    /**
     * @description 是否是圆形
     */
    circle:Boolean,
    /**
     * @description 是否禁用按钮
     */
    disabled:Boolean,
    /**
     * @description 是否是镂空按钮
     */
    empty:Boolean,
    /**
     * 按钮是否是幽灵型
     */
    ghost:Boolean,
    /**
     * @description 是否加载中按钮
     */
    loading:Boolean,
    /**
     * @description 按钮前缀图标
     */
    prefixIcon:String,
    /**
     * 按钮后缀图标
     */
    suffixIcon:String,


} as const


export const SButtonEmits = {
    click: (evt:Event) => evt instanceof Event
}
