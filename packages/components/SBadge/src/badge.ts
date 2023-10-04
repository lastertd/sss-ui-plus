import {BadgeType} from "@sss-ui-plus/utils";
import {PropType} from "vue";

export const SBadgeProps = {
    /**
     * @description 徽章类型.
     */
    type: String as PropType<BadgeType>,
    /**
     * @description 徽章的表现形式
     */
    variant:String as PropType<'empty' | 'fantasy'>,
    /**
     * @description 徽章文本内容
     */
    value: {
        type: [String, Number] as PropType<string | number>
    },

    /**
     * @description 当value为number类型时, 可显示的最大value值
     */
    maxvalue: {
        type: [String,Number] as PropType<string | number>,
        default: 99
    },
    /**
     * @description 是否隐藏徽章
     */
    hidden: Boolean,
} as const