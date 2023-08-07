import MsgExecutor from "../SMessageBox/src/msgBox.vue";
import {App, createApp} from "vue";
import indexManager from "../../src/utils/managers/IndexManager";
import {MessageTriggerTypes, MessageTypes} from "../../src/types";
import useMark from "../../src/hooks/useMark";
import MsgBox from "../SMessageBox/src/msgBox.vue";


interface options {
    /**
     * @description 消息的类型
     */
    type: MessageTypes,
    /**
     * @description 消息的图标
     */
    icon: string,
    /**
     * @description 消息的主体
     */
    text: string,
    title:string
    showMark: Boolean,
    top:string,
    cancelBtnText:string,
    confirmBtnText:string,


    draggable: Boolean,
}


export default function (options: Partial<options>) {

    return new Promise<string>((resolve, reject) => {
        const {showMark:_showMark = true} = options;
        const app: App<Element> = createApp(MsgExecutor, {
            type: options.type,
            icon: options.icon,
            title: options.title,
            text:options.text,
            draggable:options.draggable,
            showHead: true,
            showFoot: true,
            showClose: true,
            transition: 'confirm',
            confirmBtnText:options.confirmBtnText,
            cancelBtnText:options.cancelBtnText,
            top:options.top,
            onClose(trigger: MessageTriggerTypes) {
                reject(trigger)
                if (_showMark) hiddenMark();
            },
            onCancel() {
                reject('cancel')
                if (_showMark) hiddenMark();

            },
            onConfirm() {
                if (_showMark) hiddenMark();
                resolve("confirm");
            },
            onOpen(){
              if (_showMark) showMark();
            },
            onClosed(){
                mark.removeEventListener('click',handleClickMark);
                appendTo.removeChild(mountTo);
                app.unmount();
            }
        });
        const mountTo: HTMLElement = document.createElement('div');
        const appendTo: HTMLElement = document.body;
        const {mark,hiddenMark, showMark} = useMark(mountTo,'cover');
        const handleClickMark = function (){
            vm.close('mark');
        }


        mark.addEventListener("click", handleClickMark);
        const vm = app.mount(mountTo) as InstanceType<typeof MsgBox>;
        initMountTo(mountTo);
        appendTo.appendChild(mountTo);


        vm.open();


    })


}


const initMountTo = function (el: HTMLElement) {
    el.classList.add('sss-message-confirm-container')
    el.style.zIndex = indexManager.nextIndex().toString();


}


