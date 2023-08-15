import { PropType} from "vue";

type Direction = 'vertical' | 'horizontal';
type Type = 'dashed' | 'solid';
type SDividerContentPosition = 'start' | 'center' | 'end' | String;



export const SDividerProps = {
    direction:{
        type: String as PropType<Direction>,
        default:'horizontal'
    },
    type:{
      type:String as PropType<Type>,
      default:'solid'
    },
    contentPosition:{
        type:String as PropType<SDividerContentPosition>,
        default:'center'
    },
    prefixIcon:String,
    suffixIcon:String,
    content:String,
    gap:{
        type:Number,
    }

} as const