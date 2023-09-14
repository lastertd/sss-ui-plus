export const SScrollbarProps = {
    // 是否显示垂直滚动条
    vertical: {
        type: Boolean,
        default: true,
    },
    // 是否显示水平滚动条
    horizontal: Boolean,
    // 视口大小不再改变
    noResize: Boolean,
    // 滚动条始终显示
    always: Boolean,
    // 滚动条显示在视口外面
    isOutside: Boolean,
    // 是否开启跳转
    quickJump: {
        type: Boolean,
        default: true,
    },


}