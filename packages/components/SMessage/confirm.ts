import {App, createApp} from "vue";
import {IndexManager, Mark} from "@sss-ui-plus/utils";
import {MessageTriggerTypes, MessageTypes} from "@sss-ui-plus/typings";
import {SMessageBoxInstance, SMessageBox} from "../SMessageBox";

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
        const app: App<Element> = createApp(SMessageBox, {
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
                if (_showMark) mark.close();
            },
            onCancel() {
                reject('cancel')
                if (_showMark) mark.close();

            },
            onConfirm() {
                if (_showMark) mark.close();
                resolve("confirm");
            },
            onOpen(){
              if (_showMark) mark.open();
            },
            onClosed(){
                mark.element.removeEventListener('click',handleClickMark);
                appendTo.removeChild(mountTo);
                app.unmount();
            }
        });
        const mountTo: HTMLElement = document.createElement('div');
        const appendTo: HTMLElement = document.body;
        const mark = new Mark('cover');
        const handleClickMark = function (){
            vm.close('mark');
        }


        mark.element.addEventListener("click", handleClickMark);
        const vm = app.mount(mountTo) as SMessageBoxInstance
        initMountTo(mountTo);
        mountTo.appendChild(mark.element)
        appendTo.appendChild(mountTo);


        vm.open();


    })


}


const initMountTo = function (el: HTMLElement) {
    el.classList.add('sss-message-confirm-container')
    el.style.zIndex = new IndexManager().nextIndex().toString();


}


