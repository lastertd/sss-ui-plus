import {PropType} from "vue";
import {Expression, FloatingTrigger, MessageTypes, Transition} from "@sss-ui-plus/typings";
import {Placement} from "@floating-ui/vue";


export type CascaderOptionsType = {
    label:string,
    value:string,
    children?:CascaderOptionsType[]
}


export const SCascaderProps = {

    /*以下是floating属性*/
    trigger: {
        type: String as PropType<FloatingTrigger>,
        default: "click"
    },
    placement: {
        type: String as PropType<Placement>,
        default: "bottom"
    },
    transition:{
        type:String as PropType<Transition>,
        default:"scale"
    },
    openDelay:{
        type:Number,
        default:0
    },
    closeDelay:{
        type:Number,
        default:0
    },
    disabled:Boolean,
    offset:{
        type:Number,
        default:10,
    },
    theme:{
        type: String as PropType<'light' | 'dark'>,
        default:'light'
    },
    closeOnClickBody:Boolean,
    openOnMounted:Boolean,
    teleported:{
        type:Boolean,
        default:true,
    },
    showArrow:{
        type: Boolean,
        default:true
    },
    type:String as PropType<MessageTypes>,
    cancelBtnText:{
        type:String,
        default:'取消'
    },
    confirmBtnType:{
        type:String,
        default:'确认'
    },
    title:String,
    expression:{
        type:String as PropType<Expression>,
        default:'block'
    },
    floatingClass:String,
    reference:Object as PropType<any>,
    quickTrack:Boolean,


    /*以下是scrollbar属性*/
    scrollbarVertical: {
        type: Boolean,
        default: true,
    },
    // 是否显示水平滚动条
    scrollbarHorizontal: Boolean,
    // 视口大小不再改变
    scrollbarNoResize: {
        type:Boolean,
        default:true,
    },
    // 滚动条始终显示
    scrollbarAlways: Boolean,
    // 滚动条显示在视口外面
    scrollbarIsOutside: Boolean,
    // 是否开启跳转
    scrollbarQuickJump: {
        type: Boolean,
        default: true,
    },

    /*以下是dropdown属性*/
    center:Boolean,
    closeOnClickItem:{
        type:Boolean,
        default:true,
    },
    prefix:Array<string>,

    /*以下是cascader属性*/
    options:{
        type:Object as PropType<CascaderOptionsType[]>,
        default:[],
    },
    subCascaderPlacement:{
        type:String as PropType<'left' | 'right'>,
        default:'right'
    }






} as const;


export const SCascaderEmits = {
    select:(_:string, __?:string[]) => true,
    open:() => true,
    opened:() => true,
    close:() => true,
    closed: () => true,

} as const;