import {PropType} from "vue";
import {ElementSizes, ElementTypes} from "@sss-ui-plus/typings";


type buttonTypes = ElementTypes | 'primary' | 'cyan';



const sButtonNativeTypes = ['button', 'submit', 'reset'] as const;


export const SButtonProps = {
    /**
     * @description 按钮的类型, 主要控制颜色
     */
    type: String as PropType<buttonTypes>,
    /**
     * @description 按钮的原生类型
     */
    nativeType: {
        type: String as PropType<(typeof sButtonNativeTypes)[number]>,
        default: sButtonNativeTypes[0],
    },
    /**
     * @description 按钮的大小
     */
    size: String as PropType<ElementSizes>,
    /**
     * @description 按钮的主题, 主要控制交互上的表现
     */
    variant:String as PropType<'ghost' | 'fantasy' | 'empty'>,
    /**
     * @description 按钮的状态, 主要控制外观
     */
    status:String as PropType<'round' | 'circle'>,

    /**
     * @description 是否禁用按钮
     */
    disabled: Boolean,
    /**
     * @description 按钮是否处于加载状态中
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
    click: (evt: MouseEvent) => evt instanceof Event
}
