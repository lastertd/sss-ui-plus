import {PropType} from "vue";
import {isString} from "@vue/shared"

const SInputTypes = [
    'text',
    'password',
    'email'
] as const

export const SInputProps = {
    /**
     * @description 输入框类型
     */
    type: {
        type: String as PropType<(typeof SInputTypes)[number]>,
        default: SInputTypes[0],
    },
    /**
     * @description 输入框的绑定值
     */
    modelValue: {
        type: String || Number || null || undefined,

    },
    /**
     * @description test
     */
    placeholder: String,
    /**
     * @description 输入框绑定值的最大长度
     */
    maxLength: Number,
    /**
     * @description 输入框绑定值的最小长度
     */
    minLength: Number,
    /**
     * @description id
     */
    id: String,
    /**
     * @description 是否在挂载后聚焦
     */
    autofocus: Boolean,
    /**
     * @description 是否禁用输入框
     */
    disabled: Boolean,
    /**
     * @description 是否是只读输入框
     */
    readonly: Boolean,
    /**
     * @description 绑定值是否可以被清空
     */
    clearable: Boolean,
    /**
     * @description 是否显示文字长度
     */
    showWordLimit: Boolean,
    /**
     * @description 是否显示密码切换图标
     */
    showPassword: Boolean,
    /**
     * @description 输入框前缀图标
     */
    prefixIcon: String,
    /**
     * @description 输入框后缀图标
     */
    suffixIcon: String,
    /**
     * @description 输入框绑定值的校验函数
     */
    checkFunc: Function as PropType<(value: string, alert: (alertText: string, alertIcon?: string) => void) => void>

} as const


export const SInputEmits = {
    "update:modelValue": (value: String) => isString(value),
    /**
     * @description 绑定值被清空后触发的事件
     */
    clear: () => true,
    /**
     * @description 输入框输入时触发的事件
     * @param value
     */
    input: (value: String) => isString(value),
    /**
     * @description 输入框失去焦点后触发的事件
     * @param evt
     */
    blur: (evt: FocusEvent) => evt instanceof FocusEvent,
    /**
     * @description 输入框获取焦点后触发的事件
     * @param evt
     */
    focus: (evt: FocusEvent) => evt instanceof FocusEvent,

} as const