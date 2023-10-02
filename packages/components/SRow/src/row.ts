import {PropType} from "vue";


type Vertical = 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline';
type Horizontal = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';



export const SRowProps = {

    gap:{
        type:Number,
        default:0
    },
    alignItem:{
        type: String as PropType<Vertical>,
        default:'center',
    },
    justifyContent:{
        type:String as PropType<Horizontal>,
        default:'center',
    },
    wrap:Boolean,
} as const