import {PropType} from "vue";

export const SDropdownItemProps = {

    /**
     * @description 下拉框子项的前缀图标
     */
    suffixIcon:String,
    /**
     * @description 下拉框子项的后缀图标
     */
    prefixIcon:String,
    /**
     * @description 下拉框子项显示的文本
     */
    label:String,
    /**
     * @description 下拉框子项的value
     */
    value:String,
    /**
     * @description 是否点击下拉框子项时关闭下拉框
     */
    closeOnClick:{
        type:Boolean,
        default:true,
    },
    /**
     * @description 下拉框子项是否是活跃状态
     */
    active:Boolean,
    /**
     * @description 下拉框子项是否是禁用状态
     */
    disabled:Boolean,
    /**
     * @description 下拉框子项的自定义标签
     */
    tag:{
        type:String as PropType<'span' | 's-link'>,
        default:'span'
    },
    /**
     * @description 下拉框子项标签为s-link时, 跳转的地址
     */
    href:String,
    /**
     * @description 下拉框子项标签为s-link时, 跳转的方式
     */
    jumpMethod:{
        type: String as PropType<'replace' | 'push' | 'newView'>,
        default:'push'
    }
}

export const SDropdownItemEmits = {
    /**
     * @description 选中事件
     * @param value props.value
     */
    select:(value:string | undefined) => true,
    /**
     * @description 点击事件
     */
    click:() => true
}