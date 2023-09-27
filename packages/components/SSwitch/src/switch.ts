import {PropType} from "vue";
import {ElementSizes} from "@sss-ui-plus/typings";


export const SSwitchProps = {
    /**
     * @description 开关状态为off时对应的文字
     */
    inactiveText:String,
    /**
     * @description 开关状态为on时对应的文字
     */
    activeText:String,
    /**
     * @description 开关状态为off时对应的图标
     */
    inactiveIcon:String,
    /**
     * @description 开关状态为on时对应的图标
     */
    activeIcon:String,
    /**
     * @description 开关滑块中的图标
     */
    triggerIcon:String,
    /**
     * @description 是否禁用开关
     */
    disabled:Boolean,
    /**
     * @description 开关状态为on/off时文字是否放在开关的轨道中,此项会忽略对应图标
     */
    insideText:Boolean,
    /**
     * @description 开关的绑定值
     */
    modelValue: Boolean,
    /**
     * @description 开关的滑块图标是否旋转
     */
    rotating:Boolean,
    /**
     * @description 组件大小(高度)
     */
    size:String as PropType<ElementSizes>,
    /**
     * @description 开关状态改变前的回调, 若设置此项则需要手动调用done函数来切换状态
     */
    beforeChange:Function as PropType<(done:() => void) => void>
} as const


export const SSwitchEmits = {
    "update:modelValue":(val:Boolean) => true,
    change:(status:'off' | 'on') => true
}