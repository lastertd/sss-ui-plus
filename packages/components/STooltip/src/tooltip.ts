import {PropType} from "vue";
import {FloatingTrigger, Transition} from "@sss-ui-plus/typings";
import {Placement} from "@floating-ui/vue";


export const STooltipProps = {
    /**
     * @description 文本提示框出现的触发方式
     */
    trigger: {
        type: String as PropType<FloatingTrigger>,
        default: "hover"
    },
    /**
     * @description 文本提示框相对于引用元素的方位
     */
    placement: {
        type: String as PropType<Placement>,
        default: "bottom"
    },
    /**
     * @description 文本提示框相对于引用元素的偏移
     */
    offset: {
        type: Number,
        default: 10,
    },
    /**
     * @description 文本提示框出现时的过渡
     */
    transition: {
        type: String as PropType<Transition>,
        default: "s-transition-scale"
    },
    /**
     * @description 文本提示框出现时前的延时
     */
    openDelay: {
        type: Number,
        default: 50
    },
    /**
     * @description 文本提示框消失前的延时
     */
    closeDelay: {
        type: Number,
        default: 200
    },
    /**
     * @description 气是否禁用文本提示框的状态切换
     */
    disabled: Boolean,
    /**
     * @description 是否可以通过点击body来关闭文本提示框
     */
    closeOnClickBody: Boolean,
    /**
     * @description 是否在挂载后打开文本提示框
     */
    openOnMounted: Boolean,
    /**
     * @description 是否瞬移
     */
    teleported: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 是否显示小箭头
     */
    showArrow: {
        type: Boolean,
        default: true
    },
    /**
     * @description 文本提示框包裹标签的类
     */
    floatingClass: String,
    /**
     * @description 动态引用元素, 注意:slot.reference优先级高于此项
     */
    reference: Object as PropType<any>,
    /**
     * @description 是否开启快速跟踪, 当引用元素是可以移动的且文本框更新跟不上移动时开启此项
     */
    quickTrack: Boolean,
    /**
     * @description 文本提示框显示的文本
     */
    content: String,
    /**
     * @description 文本提示框的主题
     */
    theme: {
        type: String as PropType<'light' | 'dark'>,
        default: 'dark'
    },



} as const

export const STooltipEmits = {
    /**
     * @description 文本提示框关闭时触发
     */
    close: () => true,
    /**
     * @description 文本提示框关闭后触发
     */
    closed: () => true,
    /**
     * @description 文本提示框打开触发
     */
    open: () => true,
    /**
     * @description 文本提示框打开后触发
     */
    opened: () => true,
} as const