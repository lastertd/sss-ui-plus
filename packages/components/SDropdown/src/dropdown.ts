import {PropType} from "vue";
import {FloatingTrigger, Transition} from "@sss-ui-plus/typings";
import {Placement} from "@floating-ui/vue";

export const SDropdownProps = {

    /*以下是floating属性*/
    /**
     * @description 下拉框触发方式
     */
    trigger: {
        type: String as PropType<FloatingTrigger>,
        default: "click"
    },
    /**
     * @description 下拉框相对于引用元素的定位
     */
    placement: {
        type: String as PropType<Placement>,
        default: "bottom"
    },
    /**
     * @description 下拉框出现时的过渡
     */
    transition: {
        type: String as PropType<Transition>,
        default: "s-transition-scale"
    },
    /**
     * @description 下拉框出现的延时
     */
    openDelay: {
        type: Number,
        default: 0
    },
    /**
     * @description 下拉框消失的延时
     */
    closeDelay: {
        type: Number,
        default: 0
    },
    /**
     * @description 禁用下拉框
     */
    disabled: Boolean,
    /**
     * @description 下拉框相对于引用元素的偏移量
     */
    offset: {
        type: Number,
        default: 10,
    },
    /**
     * @description 是否可以通过点击页面来关闭下拉框
     */
    closeOnClickBody: Boolean,
    /**
     * @description 是否在挂载后立即出现
     */
    openOnMounted: Boolean,
    /**
     * @description 是否瞬移到到floating container元素下面
     */
    teleported: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 是否展示小箭头
     */
    showArrow: {
        type: Boolean,
        default: true
    },
    /**
     * @description 最外层元素的类
     */
    floatingClass: String,
    /**
     * @description 当没有传递reference slot时, 此项作用
     */
    reference: Object as PropType<any>,
    /**
     * @description 是否开启快速跟踪, 当reference元素可以移动且floating元素更不上时开启此项
     */
    quickTrack: Boolean,


    /*以下是scrollbar属性*/
    /**
     * 当下拉框可以滚动时, 是否显示垂直滚动条
     */
    scrollbarVertical: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 当下拉框可以滚动时， 是否显示水平滚动条
     */
    scrollbarHorizontal: Boolean,
    /**
     * @description 下拉框的大小是否不会再改变, 开启此项优化部分性能
     */
    scrollbarNoResize: Boolean,
    /**
     * @description 当下拉框可以滚动时， 是否一直显示滚动条
     */
    scrollbarAlways: Boolean,
    /**
     * @description 滚动条定位在元素外面
     */
    scrollbarIsOutside: Boolean,
    /**
     * @description 在点击滚动条时, 是否跳转到对应位置
     */
    scrollbarQuickJump: {
        type: Boolean,
        default: true,
    },

    /*以下是dropdown属性*/
    /**
     * @description 所有item内元素居中显示
     */
    center: Boolean,
    /**
     * @description 是否在点击任意Item后关闭下拉框
     */
    closeOnClickItem: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 暂时保留
     */
    prefix: Array<string>,


} as const;


export const SDropdownEmits = {
    select: (value: string, prefix?: string[]) => true,
    open: () => true,
    opened: () => true,
    close: () => true,
    closed: () => true,

} as const;