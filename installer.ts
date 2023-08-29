import {App} from "vue";
import * as comps from "./packages";
import IndexManager from "./src/utils/managers/IndexManager";


declare interface SuiOptions {
    zIndex:number
}


const init = function (options?:Partial<SuiOptions>) {
    if (!options) return;

    const {zIndex = 2000} = options;

    console.log(zIndex)

    new IndexManager(zIndex);


}

const installer = function (Vue:App, options?:Partial<SuiOptions>) {
    init(options);
    for (let key in comps){
        Vue.component(key, comps[key]);
    }
}

export default installer