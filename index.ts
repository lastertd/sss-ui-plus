/*css引入 特别注意全局样式最先引入*/
import "./packages/styles/animate.css"
import "./packages/styles/variable.less"
import "./packages/styles/global.less"
import "./packages/styles/icons/iconfont.css"

import {App} from "vue";
import {IndexManager} from "@sss-ui-plus/utils";
import {SuiOptions} from "@sss-ui-plus/typings";
import installer from "@sss-ui-plus/components/installer.ts";

export * from "./packages/components"
export * from "@sss-ui-plus/hooks"
export * from "@sss-ui-plus/utils"




const init = function (options?:Partial<SuiOptions>) {
    if (!options) return;

    const {zIndex = 2000} = options;


    new IndexManager(zIndex);


}

export default function (Vue:App, options?:Partial<SuiOptions>){
    init(options);
    installer(Vue);
}

