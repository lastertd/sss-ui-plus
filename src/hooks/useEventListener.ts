import {Events, onMounted} from "vue";

export default function (target: HTMLElement, event:string, callback:(event?:Event) => void){
    onMounted(() => {
        target.addEventListener(event, callback);
    })


}