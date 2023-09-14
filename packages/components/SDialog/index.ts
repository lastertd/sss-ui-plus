import Dialog from "./src/dialog.vue";
import {App} from "vue";
import {registerInstall} from "@sss-ui-plus/utils";



Dialog.install = function (Vue:App) {
    Vue.component("SDialog",Dialog);
}
export default registerInstall(Dialog)
export type SDialogInstance = InstanceType<typeof Dialog>
export * from "./src/dialog.ts"
export {
    Dialog as SDialog
}