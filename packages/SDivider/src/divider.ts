import { PropType} from "vue";

type Direction = 'vertical' | 'horizontal';
type Type = 'dashed' | 'solid';
type Position = string | 'start' | 'center' | 'end';


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
        type:String as PropType<Position>,
        default:'center'
    },
    prefixIcon:String,
    suffixIcon:String,
    content:String,

} as const