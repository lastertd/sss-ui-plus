import Button from "./src/button.vue"
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";


Button.install = function (Vue:App) {
    Vue.component('SButton',Button);

}

export default registerInstall(Button);


export type SButtonInstance = InstanceType<typeof Button>
export * from "./src/button.ts"
export {
    Button as SButton
}



