import {PropType} from "vue";


type Vertical = 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline';
type Horizontal = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';



export const SRowProps = {
    gap:{
        type:Number,
        default:0
    },
    vertical:{
        type: String as PropType<Vertical>,
        default:'center',
    },
    horizontal:{
        type:String as PropType<Horizontal>,
        default:'center',
    },
    wrappable:Boolean
} as const