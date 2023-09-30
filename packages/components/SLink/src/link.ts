import {PropType} from "vue";

const SLinkTypes = [
    'primary',
    'success',
    'warning',
    'info',
    'danger',
] as const;

export const SLinkProps = {
    /**
     * @description 链接的类型
     */
    type: String as PropType<(typeof SLinkTypes)[number]>,

    /**
     * @description 是否禁用链接
     */
    disabled: Boolean,
    /**
     * @description 链接是否具有下划线
     */
    underline: Boolean,
    /**
     * @description 链接跳转的地址
     */
    href: String,
    /**
     * @description 链接的跳转方式
     */
    jumpMethod: {
        type: String as PropType<'replace' | 'push' | 'newView'>,
        default: 'push'
    },

    /**
     * @description 链接的前缀图标
     */
    prefixIcon: String,
    /**
     * @description 链接后后缀图标
     */
    suffixIcon: String,


}