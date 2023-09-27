import {PropType} from "vue";
import {ElementSizes, ElementTypes} from "@sss-ui-plus/typings";


type buttonTypes = ElementTypes | 'primary' | 'cyan';



const sButtonNativeTypes = ['button', 'submit', 'reset'] as const;


export const SButtonProps = {
    /**
     * @description 按钮的类型
     */
    type: String as PropType<buttonTypes>,
    /**
     * @description 按钮的大小
     */
    size: String as PropType<ElementSizes>,
    theme:String as PropType<'ghost' | 'fantasy'>,
    status:String as PropType<'round' | 'circle'>,
    /**
     * @description 按钮的原生类型
     */
    nativeType: {
        type: String as PropType<(typeof sButtonNativeTypes)[number]>,
        default: sButtonNativeTypes[0],
    },

    /**
     * @description 是否是圆角按钮
     */
    round: Boolean,
    /**
     * @description 是否是圆形按钮
     */
    circle: Boolean,
    /**
     * @description 是否禁用按钮
     */
    disabled: Boolean,
    /**
     * @description 是否是镂空按钮
     */
    empty: Boolean,
    /**
     * @description 是否是幽灵型按钮
     */
    ghost: Boolean,
    /**
     * @description 是否加载中按钮
     */
    loading: Boolean,
    /**
     * @description 按钮的前缀图标
     */
    prefixIcon: String,
    /**
     * @description 按钮的后缀图标
     */
    suffixIcon: String,


} as const


export const SButtonEmits = {
    /**
     * @description 点击按钮后触发的事件
     * @param evt
     */
    click: (evt: Event) => evt instanceof Event
}
