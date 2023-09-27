import {PropType} from "vue";
import {ElementSizes, ElementTypes} from "@sss-ui-plus/typings";




export const STagProps = {
    /**
     * @description 标签的类型
     */
    type:String as PropType<ElementTypes | 'primary'>,
    /**
     * @description 标签的大小
     */
    size:String as PropType<ElementSizes>,
    /**
     * @description 标签的主题
     */
    theme:String as PropType<'dark' | 'light'>,
    /**
     * @description 是否是圆角
     */
    status:String as PropType< 'round' > ,
    /**
     * @description 是否可以被删除
     */
    closable:Boolean,

}

export const STagEmits = {
    click:(event:MouseEvent) => event instanceof MouseEvent,
    close:(event:MouseEvent) => event instanceof MouseEvent,
}