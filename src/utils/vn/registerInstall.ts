import {App, Component, Plugin} from "vue";


type SFCWithInstall<T> = T & Plugin


export const registerInstall = function <T extends Component>(component: T) {
    (component as SFCWithInstall<T>).install = function (Vue: App) {
        Vue.component(component.name!, component);
    }

    return component as SFCWithInstall<T>
}


