import {PropType} from "vue";
import {isString} from "@vue/shared";
import {ElementSizes, MessageTriggerTypes, ElementTypes, Transition} from "@sss-ui-plus/typings";

export const SDialogProps = {

    /**
     * @description 对话框消息头的标题
     */
    title: {
        type: String,
        default: 'default title'
    },
    /**
     * @description 是否显示消息头中的关闭图标
     */
    showCloseIcon: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 消息尾中取消按钮的文本
     */
    cancelBtnText: String,
    /**
     * @description 消息尾中确认按钮的文本
     */
    confirmBtnText: String,
    /**
     * @description 消息尾中按钮的大小
     */
    btnSize: String as PropType<ElementSizes>,
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
     * @description 对话框的过渡动画
     */
    transition: String as PropType<Transition>,

    /**
     * @description 对话框是否可以被拖动
     */
    draggable: Boolean,
    /**
     * @description 对话框距离浏览器视口顶部的距离
     */
    top: {
        type: String,
        default: '20vh'
    },



    /**
     * @description 对话框关闭事件前的回调函数，若设置此项, 需要手动调用done函数关闭对话框
     */
    beforeClose: Function as PropType<(done: () => void) => void>,

    /**
     * @description 是否显示遮罩
     */
    showMark: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 是否可以通过按下ESC来关闭对话框
     */
    closeOnPressEscape: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 在显示遮罩的情况下, 是否可以通过点击遮罩关闭对话框
     */
    closeOnClickMark: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 对话框出现时, 是否禁止浏览器的滚动行为
     */
    lockScroll: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 是否挂载到body元素下面, 在层级混乱时开启此项
     */
    appendToBody: Boolean,

    /**
     * @description 对话框打开/关闭的绑定值
     */
    modelValue: Boolean,


} as const

export const SDialogEmits = {
    "update:modelValue": (_: boolean) => true,
    /**
     * @description 打开对话框时触发的事件
     */
    open: () => true,
    /**
     * @description 打开对话框后触发的事件
     */
    opened: () => true,
    /**
     * @description 关闭对话框时触发的事件
     * @param trigger 触发器
     */
    close: (trigger: MessageTriggerTypes) => isString(trigger),
    /**
     * @description 关闭对话框后触发的事件
     */
    closed: () => true,
    /**
     * @description 取消对话框时触发的事件
     */
    cancel: () => true,
    /**
     * @description 确认对话框时触发的事件
     */
    confirm: () => true,
    /**
     * @description (关闭，取消，确认)对话框时触发的事件
     */
    hidden: () => true,
}