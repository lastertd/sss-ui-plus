import {PropType} from "vue";
import {FloatingTrigger, Transition, MessageTypes} from "@sss-ui-plus/typings";
import {Placement} from "@floating-ui/vue";


export const SPopconfirmProps = {
    /**
     * @description 气泡确认框出现的触发方式
     */
    trigger: {
        type: String as PropType<FloatingTrigger>,
        default: "clickToOpen"
    },
    /**
     * @description 气泡确认框相对于引用元素的方位
     */
    placement: {
        type: String as PropType<Placement>,
        default: "bottom"
    },
    /**
     * @description 气泡确认框相对于引用元素的偏移
     */
    offset: {
        type: Number,
        default: 10,
    },
    /**
     * @description 气泡确认框出现时的过渡
     */
    transition: {
        type: String as PropType<Transition>,
        default: "s-transition-scale"
    },
    /**
     * @description 气泡确认框出现时前的延时
     */
    openDelay: {
        type: Number,
        default: 0
    },
    /**
     * @description 气泡确认框消失前的延时
     */
    closeDelay: {
        type: Number,
        default: 0
    },
    /**
     * @description 气是否禁用气泡确认框的状态切换
     */
    disabled: Boolean,
    /**
     * @description 是否可以通过点击body来关闭气泡确认框
     */
    closeOnClickBody: Boolean,
    /**
     * @description 是否在挂载后打开气泡确认框
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
     * @description 气泡确认框包裹标签的类
     */
    floatingClass: String,
    /**
     * @description 动态引用元素, 注意:slot.reference优先级高于此项
     */
    reference: Object as PropType<any>,
    /**
     * @description 是否开启快速跟踪, 当引用元素是可以移动的且气泡框更新跟不上移动时开启此项
     */
    quickTrack: Boolean,
    /**
     * @description 气泡确认框显示的文本
     */
    content: String,
    /**
     * @description 气泡确认框的类型
     */
    type: String as PropType<MessageTypes>,
    /**
     * @description 气泡确认框取消按钮的文本
     */
    cancelBtnText: {
        type: String,
        default: '取消'
    },
    /**
     * @description 气泡确认框确认按钮的文本
     */
    confirmBtnText: {
        type: String,
        default: '确认'
    },
    /**
     * @description 自定义气泡确认框图标
     */
    icon: String,
    /**
     * @description 自定义图标颜色
     */
    iconColor: String


} as const

export const SPopconfirmEmits = {
    /**
     * @description 消息框关闭时触发
     */
    close: () => true,
    /**
     * @description 消息框关闭后触发
     */
    closed: () => true,
    /**
     * @description 消息框打开触发
     */
    open: () => true,
    /**
     * @description 消息框打开后触发
     */
    opened: () => true,
    /**
     * @description 按下消息尾中的取消按钮后触发
     */
    cancel: () => true,
    /**
     * @description 按下消息尾中的确认按钮后触发
     */
    confirm: () => true,
} as const