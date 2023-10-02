import {isNumber} from "@sss-ui-plus/utils";

export const SScrollbarProps = {
    /**
     * @description 视口大小是否不再改变
     */
    noResize: Boolean,
    /**
     * @description 滚动条是否始终显示
     */
    always: Boolean,
    /**
     * @description 是否使用原生滚动条
     */
    native:Boolean,
    /**
     * @description 滚动条是否显示在视口外面
     */
    isOutside: Boolean,
    /**
     * @description 是否开启跳转
     */
    quickJump: {
        type: Boolean,
        default: true,
    },

}
export const SScrollbarEmits = {
    scroll:(scrollLeft:number, scrollTop:number) => isNumber(scrollLeft) && isNumber(scrollTop)
} as const