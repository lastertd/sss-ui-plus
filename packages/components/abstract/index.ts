import SPartial from "./src/SPartial.vue";
import {registerInstall} from "@sss-ui-plus/utils";


export default registerInstall(SPartial)
export type SPartialInstance = InstanceType<typeof SPartial>
export {
    SPartial
}
