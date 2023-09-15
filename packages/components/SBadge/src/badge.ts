import {BadgeType} from "@sss-ui-plus/utils";
import {PropType} from "vue";

export const SBadgeProps = {
    // 徽章类型
    type: String as PropType<BadgeType>,
    // 徽章显示的文本
    value: {
        type: [String, Number]
    },
    // value为number类型时， 最大显示值
    maxvalue: {
        type: [String,Number],
        default: 99
    },
    // 是否隐藏徽章
    hidden: Boolean
} as const