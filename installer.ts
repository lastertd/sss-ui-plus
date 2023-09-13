import {App} from "vue";
import * as comps from "./packages";
import {IndexManager} from "@sss-ui-plus/utils";

declare interface SuiOptions {
    zIndex:number
}


const init = function (options?:Partial<SuiOptions>) {
    if (!options) return;

    const {zIndex = 2000} = options;


    new IndexManager(zIndex);


}

const installer = function (Vue:App, options?:Partial<SuiOptions>) {
    init(options);
    for (let key in comps){
        Vue.component(key, Reflect.get(comps, key));
    }
}

export default installer