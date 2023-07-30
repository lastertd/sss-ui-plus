import {App} from "vue";

export default function (targetName:string, comp:any) {
    comp.install = (Vue:App) => {
        Vue.component(targetName, comp);
    }

    return comp

}