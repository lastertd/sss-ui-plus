import {PropType} from "vue";

const SIconTypes = [
    'i',
    'label',
] as const


export const SIconProps = {
    /**
     * @description 图标的名称
     */
    target:String,
    /**
     * @description 图标的自定义元素标签
     */
    tag: {
        type:String as PropType<(typeof SIconTypes)[number]>,
        default:SIconTypes[0]
    },
    /**
     * @description 当图标标签为label时, label.for
     */
    for: String,
    /**
     * @description 图标是否会无限旋转
     */
    rotating: Boolean,
    /**
     * @description 图标的颜色
     */
    color: String,
    /**
     * @description 图标是否没有padding 默认有左右5px的padding值
     */
    noPadding:Boolean
}
