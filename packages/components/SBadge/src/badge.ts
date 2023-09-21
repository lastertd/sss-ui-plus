import {BadgeType} from "@sss-ui-plus/utils";
import {PropType} from "vue";

export const SBadgeProps = {
    /**
     * @description 徽章类型, 此项不具备响应式, 请确保它的值不会改变
     */
    type: String as PropType<BadgeType>,
    /**
     * @description 徽章文本内容
     */
    value: {
        type: [String, Number]
    },
    /**
     * @description 当value为number类型时, 可显示的最大value值
     */
    maxvalue: {
        type: [String,Number],
        default: 99
    },
    /**
     * @description 是否隐藏徽章
     */
    hidden: Boolean,
    /**
     * @description 是否是镂空类型的徽章，此项不具备响应式, 请确保它的值不会改变
     */
    empty:Boolean
} as const