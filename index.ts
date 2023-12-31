/*css引入 特别注意全局样式最先引入*/

import "./packages/styles/global.less"

import {App} from "vue";
import {IndexManager} from "@sss-ui-plus/utils";
import {SuiOptions} from "@sss-ui-plus/typings";
import installer from "@sss-ui-plus/components/installer";

export * from "./packages/components"
export * from "@sss-ui-plus/hooks"
export * from "@sss-ui-plus/utils"
export * from "@sss-ui-plus/typings"




const init = function (options?:Partial<SuiOptions>) {
    if (!options) return;

    const {zIndex = 2000} = options;


    new IndexManager(zIndex);


}



export default function (Vue:App, options?:Partial<SuiOptions>){
    init(options);
    installer(Vue);
}

