import {PropType} from "vue";
import "./msgBox.less"
import {isString} from "@vue/shared";
import {ElementSizes, MessageTriggerTypes, MessageTypes, Transition} from "@sss-ui-plus/typings";


export const SMsgBoxProps = {
    /**
     * @description 消息框的类型
     */
    type: String as PropType<MessageTypes>,
    /**
     * @description 消息框图标
     */
    icon: String,
    /**
     * @description 消息框图标的颜色
     */
    iconColor: String,
    /**
     * @description 消息头的标题
     */
    title: {
        type: String,
        default: 'default title'
    },
    /**
     * @description 消息体的文本
     */
    text: String,
    /**
     * @description 消息框的过渡动画
     */
    transition: {
        type:String as PropType<Transition>,
        default:'s-transition-downFade'
    },
    /**
     * @description 是否可以通过按下ESC来关闭消息框
     */
    closeOnPressEscape: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 消息框是否可以被拖动
     */
    draggable: Boolean,
    /**
     * @description 消息框距离浏览器视口顶部的距离
     */
    top: {
        type: String,
    },
    /**
     * @description 是否去除消息头
     */
    noHeader: Boolean,
    /**
     * @description 是否去除消息体
     */
    noBody: Boolean,
    /**
     * @description 是否去除消息尾
     */
    noFooter: Boolean,
    /**
     * @description 是否显示消息头中的关闭图标
     */
    showCloseIcon: Boolean,
    /**
     * @description 消息尾中取消按钮的文本
     */
    cancelBtnText: {
        type: String,
        default: '取消'
    },
    /**
     * @description 消息尾中确认按钮的文本
     */
    confirmBtnText: {
        type: String,
        default: '确认',
    },
    /**
     * @description 消息尾中按钮的大小
     */
    btnSize: {
        type: String as PropType<ElementSizes>,
        default: "small"
    },
    /**
     * @description 消息框关闭事件前的回调函数，若设置此项, 需要手动调用done函数关闭消息框
     */
    beforeClose: Function as PropType<(done: () => void) => void>

} as const


export const SMsgBoxEmits = {
    /**
     * @description 消息框关闭时触发
     */
    close: (trigger: MessageTriggerTypes) => isString(trigger),
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
    hidden: () => true
} as const