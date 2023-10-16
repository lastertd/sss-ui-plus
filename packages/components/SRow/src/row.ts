import {PropType} from "vue";
import {isNumber} from "@sss-ui-plus/utils";


type Vertical = 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline';
type Horizontal = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';



export const SRowProps = {
    gutter:{
        type:[Number, String] as PropType<string | number>,
        default:0,
        validator:(val:any) => isNumber(Number.parseInt(val))
    },
    align:{
        type: String as PropType<Vertical>,
        default:'stretch',
    },
    justify:{
        type:String as PropType<Horizontal>,
        default:'flex-start',
    },
    tag:{
        type:String,
        default:'div'
    }
} as const