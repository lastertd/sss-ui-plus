export const SSkeletonProps = {
    /**
     * @description 是否运用扫描线动画效果
     */
    animated:Boolean,
    /**
     * @description 是否在加载中, 在加载中时会显示骨架屏，反之则显示真实ui
     */
    loading:{
        type:Boolean,
        default:true,
    },
    /**
     * @description 骨架屏和真实ui之间切换的延时
     */
    throttle:Number,
}