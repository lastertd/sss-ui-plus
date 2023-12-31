import { PropType} from "vue";

type Direction = 'vertical' | 'horizontal';
type Type = 'dashed' | 'solid';
type SDividerContentPosition = 'start' | 'center' | 'end' | string;



export const SDividerProps = {
    /**
     * @description 分割线的方向. 此项不具备响应式，请确保该值不会被改变
     */
    direction:{
        type: String as PropType<Direction>,
        default:'horizontal'
    },
    /**
     * @description 分割线的类型
     */
    status:{
      type:String as PropType<Type>,
      default:'solid'
    },
    /**
     * @description 分割线分割出来的宽度/高度
     */
    gap:{
        type:Number,
    },
    /**
     * @description 分割线的文本
     */
    text:String,

    /**
     * @description 分割线文本所处的位置. 此项不具备响应式，请确保该值不会被改变
     */
    placement:{
        type:String as PropType<SDividerContentPosition>,
        default:'center'
    },

    /**
     * @description 分割线文本的前缀图标
     */
    prefixIcon:String,
    /**
     * @description 分割线文本的后缀图标
     */
    suffixIcon:String,


} as const