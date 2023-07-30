import Button from "./src/button.vue"
import {App} from "vue";


Button.install = function (Vue:App) {
    Vue.component('SButton', Button);
}

export default Button

