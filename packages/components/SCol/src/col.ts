import {PropType} from "vue";



export const SColProps = {
    span: {
        type: [String, Number] as PropType<string | number>,
        default: 1,
        validator: (val: any) => {
            const _ = Number.parseInt(val);
            return 0 <= _ && _ <= 24;
        }
    },
    offset: {
        type: [String, Number] as PropType<string | number>,
        default:0,
        validator: (val: any) => {
            const _ = Number.parseInt(val);
            return 0 <= _ && _ <= 24;
        }
    },
    tag: {
        type: String,
        default: 'div'
    }
} as const