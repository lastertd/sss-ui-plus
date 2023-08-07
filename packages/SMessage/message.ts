import MsgExecutor from "../SMessageBox/src/msgBox.vue";
import {App, createApp} from "vue";
import delay from "../../src/utils/delay";
import LayoutManager from "../../src/utils/managers/LayoutManager";
import indexManager from "../../src/utils/managers/IndexManager";
import {MessageTypes} from "../../src/types";
import MsgBox from "../SMessageBox/src/msgBox.vue";


interface options {
    /**
     * @description 消息的类型
     */
    type: MessageTypes,
    /**
     * @description 消息的图标
     */
    icon:string,
    /**
     * @description 消息的主体
     */
    text:string,
    /**
     * @description 消息的存活时间
     */
    timeout:number,
    /**
     * @description 距离上一个消息的间距
     */
    offset:number,

    showClose:Boolean,
}

// 管理notify的位移
const autoLayoutDown = new LayoutManager('down');






export default async function (options:Partial<options>) {
    const {timeout = 3000, offset = 10} = options;
    const app: App<Element> = createApp(MsgExecutor,{
        type:options.type,
        icon:options.icon,
        title:options.text,
        showHead:true,
        showClose:options.showClose,
        transition: 'msg',
        onClose(){
            autoLayoutDown.delete(mountTo);
            delay(500).then(() => {
                appendTo.removeChild(mountTo);
                app.unmount();
            })
        }
    });
    const mountTo: HTMLElement = document.createElement('div');
    const appendTo: HTMLElement = document.body;
    const vm = app.mount(mountTo) as InstanceType<typeof MsgBox>;


    initMountTo(mountTo, offset);
    appendTo.appendChild(mountTo);


    vm.open();
    autoLayoutDown.push(mountTo);


    // 不会自动关闭
    if (timeout === 0){
        return
    }

    await delay(timeout);

    vm.close('system');




}



const initMountTo = function (el:HTMLElement, offset:number ) {
    el.classList.add('pos-top-center');
    el.classList.add('sss-message-msg-container')
    el.setAttribute('data-space',offset.toString());
    el.style.top = `${autoLayoutDown.next()}px`;
    el.style.zIndex = indexManager.nextIndex().toString();




}


