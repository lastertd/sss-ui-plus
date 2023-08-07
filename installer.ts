import {App} from "vue";
import * as comps from "./packages";

const installer = function (Vue:App) {
    for (let key in comps){
        Vue.component(key, comps[key]);
    }
}

export default installer